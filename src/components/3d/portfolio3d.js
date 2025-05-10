import { animate } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { object as object3d } from "prop-types";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader, GLTFLoader, OrbitControls, TextGeometry } from "three/examples/jsm/Addons";
import { DefaultIconOctahedron, Icon3d } from "./icon3d";
import { Paralax } from "../../pages/home/home";
import { useGetMouseCoordinate } from "../../hook/utils";
import { getLenis } from "../../utils/utils";
import { img1, img2, img3 } from "../../variable";



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





function useImg3dProvider(imgSrcs, width, height, currentInd) {
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
    }, [currentInd]);

    return object3dsRef;
}



export function Portfolio3d() {
    const containerRef = useRef(null);
    const [currentInd, setCurrentInd] = useState(0);
    const object3dsRef = useImg3dProvider(imgSrcs_[currentInd], 16/1.7, 9/1.7, currentInd);  // 在完成後會自動觸發re-render
    const isLoaded = object3dsRef.current.length === imgSrcs_[currentInd].length;

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
            light.position.set(0, 10, 5);
            scene.add(light);
    

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 10);
            scene.add(camera);


            // init portfolio
            const spacing = 12;
            object3dsRef.current.forEach((object3d, i) => {
                object3d.position.set(i*spacing, 0, 0)
                scene.add(object3d);
                object3d.userData.originPos = object3d.position.clone();
                object3d.userData.originRot = object3d.rotation.clone();
            })


            // 計算pin時的位移
            let canvasTop;
            const lenis = getLenis();
            let diff;
            const scrollY = 1000;

            ctx = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${scrollY}px`,
                    pin: true,
                    onEnter: () => {
                        canvasTop = lenis.scroll;
                    }
                })
            })

            lenis.on("scroll", () => {
                    diff = lenis.scroll - canvasTop;

                    if(diff) {
                        const progress = diff / scrollY;
                        const totalTranslateX = (object3dsRef.current.length-1) * spacing;
                        
                        object3dsRef.current.forEach((object3d) => {
                                const translateX = object3d.userData.originPos.x - totalTranslateX * progress
                                object3d.position.x = translateX;
                        })
                    }
            })
            
            let count = 0;
            const animate = () => {
                rafId = requestAnimationFrame(animate);
                
                count%1000===0 && console.log(scene.children);
                count++;

                const translateZs = [];
                if (diff) {
                    object3dsRef.current.forEach((object3d, i) => {
                        // 控制y和縮放
                        const pos = object3d.position.clone().project(camera);
                        const offset = Math.sqrt(pos.x ** 2 + pos.y ** 2);

                        const translateY  =  offset ** 2 * 3;
                        object3d.position.y = object3d.userData.originPos.y + (camera.position.x > object3d.position.x ? -translateY : translateY);
                        
                        const translateZ = -(offset ** 2 * 5);
                        translateZs[i] = translateZ;
                        object3d.position.z = object3d.userData.originPos.z + translateZ;


                        const rotateY = offset ** 2 * 0.3;
                        object3d.rotation.y = object3d.userData.originRot.y + (camera.position.x > object3d.position.x ? -rotateY : rotateY);


                        const rotateZ = offset ** 2 * 0.1;
                        object3d.rotation.z = object3d.userData.originRot.z + (camera.position.x > object3d.position.x ? -rotateZ : rotateZ);
                    })
                }
                count%1000===0 && console.log(translateZs);
                

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
    }, [isLoaded, currentInd]);

    return (
        <>
            <div style={{display: "flex", color: "white"}}>
                <button onClick={() => {setCurrentInd(0)}}>平面設計</button>
                <button onClick={() => {setCurrentInd(1)}}>動態設計</button>
                <button onClick={() => {setCurrentInd(2)}}>網站設計</button>
                <button onClick={() => {setCurrentInd(3)}}>3d建模</button>
            </div>
            <div ref={containerRef}></div>
        </>
        
    )
}


const imgSrcs_ = [
    [
        img1,
        img1,
        img1,
    ],
    [
        img2,
        img2,
        img2,
    ],
    [
        img3,
        img3,
        img3,
    ],
    [
        img1,
        img1,
        img1,
    ],
]


const imgSrcs = [
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png",
    "https://res.cloudinary.com/dtoefi3cs/image/upload/v1742031089/%E6%89%8B_%E4%B8%89%E9%83%A8%E6%9B%B2_abvx63.png",
]





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

    return (
        <>
            <div style={{height: "50vh"}}></div>
            <Portfolio3d />
            <DraggableScene />
        </>
    )

}