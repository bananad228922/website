import { animate } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { object } from "prop-types";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader, GLTFLoader, OrbitControls, TextGeometry } from "three/examples/jsm/Addons";
import { DefaultIconOctahedron, Icon3d } from "./icon3d";
import { Paralax } from "../../pages/home/home";
import { useGetMouseCoordinate } from "../../hook/utils";
import { getLenis } from "../../utils/utils";



export function DraggableScene () {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    const mouseRef = useGetMouseCoordinate(canvasRef);

    useLayoutEffect(() => {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.setClearColor("#ffffff");
        renderer.setClearColor("#ffffff");
        canvasRef.current = renderer.domElement;
        containerRef.current.appendChild(canvasRef.current);

        const scene = new THREE.Scene();
        

        const light = new THREE.PointLight("#ffffff", 500);
        light.lookAt(new THREE.Vector3(0, 0, 0));
        light.position.set(0, 10, 0);
        scene.add(light);
        
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 1);
        scene.add(camera);

        // 加入text
        const fontLoader = new FontLoader();
        fontLoader.load('/Arial_Regular.json', (font) => {
          const textGeometry = new TextGeometry('Welcome to Portfolio', {
            font: font,
            size: 1,
            depth: 0.01,
          });
          textGeometry.center();
        
          const material = new THREE.MeshStandardMaterial({ color: "#000000" });
          const textMesh = new THREE.Mesh(textGeometry, material);
          const angle = Math.PI * 2 * 0.5;
          textMesh.position.set(camera.position.x + 10 * Math.cos(angle), 0, camera.position.z + 10 * Math.sin(angle));
          textMesh.lookAt(camera.position);
          scene.add(textMesh);
        });


        // 加入作品
        const loader = new THREE.TextureLoader();

        const object3ds = [];
        for(let i = 0; i < imgSrcs.length; i++) {
            loader.load(imgSrcs[i], (texture) => {
                const planeGeometry = new THREE.PlaneGeometry(16/2, 9/2);
                const planeMaterial = new THREE.MeshStandardMaterial({
                    map: texture,
                })
        
                const plane = new THREE.Mesh(planeGeometry, planeMaterial);

                plane.userData.url = imgSrcs[i];
                plane.userData.mousedown = false;

                const angle = i / imgSrcs.length * Math.PI * 2;
                plane.position.set(camera.position.x + 10 * Math.cos(angle), 0, camera.position.z + 10 * Math.sin(angle));
                plane.lookAt(camera.position);
                
                scene.add(plane);
                object3ds.push(plane);
            })
        }

        // 鼠標邏輯
        const raycaster = new THREE.Raycaster();


        const mousedownPos = {x: 0, y: 0};
        // 點擊事件
        const mousedownHandle = (event) => {
            const hitObject3ds = raycaster.intersectObjects(object3ds);
            const isHit = hitObject3ds.length > 0;

            if (isHit) {
                mousedownPos.x = event.clientX;
                mousedownPos.y = event.clientY;
            }
        }

        document.addEventListener("mousedown", mousedownHandle);


        const mouseupHandle = (event) => {
            const hitObject3ds = raycaster.intersectObjects(object3ds);
            const isHit = hitObject3ds.length > 0;

            if (isHit) {
                const diffx = mousedownPos.x - event.clientX;
                const diffy = mousedownPos.y - event.clientY;

                const diff = Math.sqrt(diffx ** 2 + diffy ** 2);
                if (diff < 5) {
                    hitObject3ds.forEach((hitObject, i) => {
                        window.open(imgSrcs[i]);
                    })
                }
            }
        }
        document.addEventListener("mouseup", mouseupHandle);
        

        // animation
        const controls = new OrbitControls(camera, canvasRef.current);
        controls.rotateSpeed = -1;
        controls.enableDamping = true;
        controls.enableZoom = false;
        controls.enablePan = false;

        let isScale = false;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            const mouse = new THREE.Vector2(mouseRef.current.x, mouseRef.current.y);
            raycaster.setFromCamera(mouse, camera);

            // 旋轉場景
            gsap.to(controls.target, {
                x: mouseRef.current.x * 0.1,
                y: mouseRef.current.y * 0.1,
            })

            // raycaster
            const hitObjects = raycaster.intersectObjects(object3ds);
            const isHit = hitObjects.length > 0;

            const scale = 1.1
            if (isHit) {
                hitObjects.forEach((hitObject) => {
                    if (!isScale) {
                        gsap.to(hitObject.object.scale, {
                            x: scale,
                            y: scale,
                            z: scale,
                            ease: "power1.out",
                            duration: 0.3,
                        })
                        isScale = true;
                    }
                })
            } else {
                hitObjects.forEach((hitObject) => {
                    hitObject.object.userData.isMousedown = false;
                })

                if (isScale) {
                    object3ds.forEach((object3d) => {
                        gsap.to(object3d.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "power1.out",
                            duration: 0.3,
                        })
                    })
                    isScale = false
                }
            }
            
            renderer.render(scene, camera);
        }
        animate();

        return () => {
            containerRef.current.removeChild(canvasRef.current);
            document.removeEventListener("mousedown", mousedownHandle);
            document.removeEventListener("mouseup", mouseupHandle);
        }
    }, [])

    return (
        <div ref={containerRef}>
        </div>
    )
}





function useImg3dProvider(imgSrcs, width, height) {
    const object3dsRef = useRef([]);
    const runOnceRef = useRef(false);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (!runOnceRef.current) {
            const loader = new THREE.TextureLoader();

            for(let i = 0; i < imgSrcs.length; i++) {
                loader.load(imgSrcs[i], (texture) => {
                    const planeGeometry = new THREE.PlaneGeometry(width, height);
                    const planeMaterial = new THREE.MeshStandardMaterial({map: texture,})
            
                    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
                    object3dsRef.current.push(plane);
    
                    console.log(`object${i} loaded`);

                    setIsLoaded(object3dsRef.current.length === imgSrcs.length);
                })
            }
        }
        runOnceRef.current = true;
    }, []);

    return object3dsRef;
}



export function Portfolio3d() {
    const containerRef = useRef(null);

    const object3dsRef = useImg3dProvider(imgSrcs, 16/2, 9/2);  // 在完成後會自動觸發re-render
    const isLoaded = object3dsRef.current.length === imgSrcs.length;

    useLayoutEffect(() => {
        console.log("Entry effect");

        let ctx;
        let rafId;
        let renderer;
        if (isLoaded) {
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current.appendChild(renderer.domElement);
    

            const scene = new THREE.Scene();
    

            const light = new THREE.PointLight("#ffffff",1000);
            light.position.set(0, 10, 1);
            scene.add(light);
    

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 10);
            scene.add(camera);


            // add img
            object3dsRef.current.forEach((object3d, i) => {
                object3d.position.set(-10+i*10, -3+i*3, 0)
                scene.add(object3d);
            })


            // gsap
            ctx = gsap.context(() => {
                object3dsRef.current.forEach((object3d) => {  // 一個負責控制位移
                    gsap.to(object3d.position, {
                        x: "-=5", 
                        y: "-=5",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            scrub: true,
                            start: "top top",
                            end: "+=1000px",
                        },
                    })
                })
                ScrollTrigger.create({   // 一個負責綁定
                    trigger: containerRef.current, 
                    pin: true,
                    start: "top top",
                })
            })
            console.log("content create");


            const lenis = getLenis();
            lenis.on("scroll", () => {

            })
            
            let count = 0;
            const animate = () => {
                rafId = requestAnimationFrame(animate);
                
                count%1000===0 && console.log(scene.children);
                count++;

                object3dsRef.current.forEach((object3d) => {
                    const pos = object3d.position.clone().project(camera);
                    const offset = Math.sqrt(pos.x ** 2 + pos.y ** 2) - 0

                    const scale = Math.min(1, 10 + offset * -10);
                    object3d.scale.set(scale, scale, scale);
                })
                

                renderer.render(scene, camera);
            }
    
            animate();
        }

        return () => {
            if (renderer) {
                containerRef.current.removeChild(renderer.domElement);                
            }

            if (ctx) {
                ctx.revert();
            }
            cancelAnimationFrame(rafId);
        }
    }, [isLoaded]);

    return (
        <div ref={containerRef}></div>
    )
}





export function Portfolio3dTransition({children}) {
    const portfolio3dRef = useRef(null);
    const portfolio3dContainerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: portfolio3dContainerRef.current,
                pin: true,
                start: "top top",
                onEnter: () => {
                    gsap.to(portfolio3dRef.current, {
                        borderRadius: 3,
                        transform: "scale(1)",
                    })
                },
                onEnterBack: () => {
                    gsap.to(portfolio3dRef.current, {
                        borderRadius: 3,
                        transform: "scale(1)",
                    })
                },
                onLeave: () => {
                    gsap.to(portfolio3dRef.current, {
                        borderRadius: 50,
                        transform: "scale(0.9)",
                    })
                },
                onLeaveBack: () => {
                    gsap.to(portfolio3dRef.current, {
                        borderRadius: 50,
                        transform: "scale(0.9)",
                    })
                },
            })
        })
        return () => {
            ctx.revert();
        }
    }, [])

    return (
        <section ref={portfolio3dContainerRef} style={{position: "relative", zIndex: 1}}>
            <div
                style={{
                    borderRadius: 50,
                    overflow: "hidden",
                    transform: "scale(0.9)",
                }}
                ref={portfolio3dRef}
            >
                {children}
            </div>
        </section>
    )
}

const imgSrcs = [
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032926/Logo_Mockup_aagbng.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742032515/Free_Book_Mockup_8_jy7wbm.png",
];



function Start() {
    return (
        <Portfolio3dTransition>
            <div style={{height: "100vh", width: "100vw", backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h1 className="display-1">Portfolio</h1>
                <p className="paragraph-l">drag to drag</p>
                <Paralax paralax={1000} markers={true} start="top center">
                    <div style={{transform: "translateY(-700px)"}}>
                        <DefaultIconOctahedron />
                    </div>
                </Paralax>
            </div>
        </Portfolio3dTransition>

    )
}


export function TestPortfolio3d() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);


    return (
        <>
            <div style={{height: "50vh"}}></div>
            <Portfolio3d />
            <DraggableScene />
        </>
    )

}