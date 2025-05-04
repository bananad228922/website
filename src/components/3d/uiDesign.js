import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { use, useEffect, useLayoutEffect, useRef, useState } from "react";
import { hover } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { object } from "prop-types";

// 1. 加入light
// 2. model
// 3. scene
// 4. camera
// 5. renderer

gsap.registerPlugin(ScrollTrigger);
export function UiDesign() {
    const canvaRef = useRef(null);

    useLayoutEffect(() => {
        let isMounted = true;

        if (!canvaRef.current) {
            return;
        }
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(1);
        canvaRef.current.appendChild(renderer.domElement);

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(20, window.innerWidth/window.innerHeight, 0.1, 10000);
        camera.position.set(0, 1.9, 10);
        
        const light = new THREE.SpotLight("#ffffff", 5000, 10000);
        light.position.set(0, 20, 10);
        scene.add(light);




        // 場景二的互動模型
        const spheres = [];
        
        for(let i = 0; i < 100; i++) {
            const size = Math.random() * 0.1;
            const posX = (Math.random() - 0.5) * 10;
            const posY = (Math.random() - 0.5) * 10;
            const posZ = (Math.random() - 1) * 5;
            const color = Math.min(Math.random() + 0.3, 0.9);


            const geometry = new THREE.SphereGeometry(size, 10, 10);
            const material = new THREE.MeshBasicMaterial();
            material.color.setRGB(color, color, color);
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(posX, posY, posZ);
            sphere.userData = {
                initalPosition: sphere.position.clone(),
                offset: Math.random() * Math.PI * 2,
            }
            scene.add(sphere);
            spheres.push(sphere);
        }

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        document.addEventListener("mousemove", (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        })

        const animate2 = () => {
            requestAnimationFrame(animate2);

            
            const time = performance.now() * 0.001;
            raycaster.setFromCamera(mouse, camera)

            spheres.forEach((sphere) => {
                // 小幅度飄動
                sphere.position.x = sphere.userData.initalPosition.x + Math.sin(time + sphere.userData.offset) * 0.1;
                sphere.position.y = sphere.userData.initalPosition.y + Math.cos(time + sphere.userData.offset) * 0.1;
                sphere.position.z = sphere.userData.initalPosition.z + Math.sin(time + sphere.userData.offset) * 0.1;


                // 互動式設計
                const spherePosition = sphere.position.clone();
                
                const mouseToSphere = new THREE.Vector3();
                raycaster.ray.closestPointToPoint(spherePosition, mouseToSphere);
                const distance = spherePosition.distanceTo(mouseToSphere);
                const threshold = 0.5;
                if (distance < threshold) {
                    sphere.userData.initalPosition.add(spherePosition.clone().sub(mouseToSphere).normalize().multiplyScalar((threshold - distance) * 0.1));
                }
                
            })

            renderer.render(scene, camera);
        }
        animate2();





        let ctx;

        const loader = new GLTFLoader();
        loader.load('/uiDesign.glb', (glb) => {
            if (!isMounted) return;
            const model = glb.scene;
            scene.add(model);

            // 獲取鼠標信息
            const mouse = new THREE.Vector2();

            document.addEventListener("mousemove", (event) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            })
    
            // animate
            const modelRotate = [
                model.getObjectByName("X1"),
                model.getObjectByName("X2"),
                model.getObjectByName("X3"),
                model.getObjectByName("Torus")
            ];
            const modelScale = model.getObjectByName("Torus");
            const modelTransition = [
                model.getObjectByName("dot1"),
                model.getObjectByName("dot2"),
                model.getObjectByName("X1"),
                model.getObjectByName("X2"),
                model.getObjectByName("X3"),
                model.getObjectByName("line"),
                model.getObjectByName("line2"),
                model.getObjectByName("text_"),
                model.getObjectByName("text_title"),
                model.getObjectByName("Torus"),
            ]
            let prevMouseY = 0;
            let prevMouseX = 0;
            const raycaster = new THREE.Raycaster();
            let currScale = 1;

            function animate() {
                requestAnimationFrame(animate);
    
                // rotate scene
                const diffY = mouse.y - prevMouseY;
                const diffX = mouse.x - prevMouseX;
    
                const currMouseY = prevMouseY + diffY * 0.1;
                const currMouseX = prevMouseX + diffX * 0.1;
    
                scene.rotation.x = currMouseY * 0.1;
                scene.rotation.y = currMouseX * 0.1;
    
                prevMouseY = currMouseY;
                prevMouseX = currMouseX;


                // rotate object
                if (modelRotate.length > 0) {
                    modelRotate.forEach((model) => {
                        if(model) {
                            model.rotateX(0.01);
                            model.rotateY(-0.01);
                        }
                    })
                }


                // scale model
                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObject(modelScale);

                let diff;
                if (intersects.length > 0) {
                    diff = 1.2 - currScale;
                } else {
                    diff = 1 - currScale;
                }
                const nextScale = diff * 0.1 + currScale;
                modelScale.scale.set(nextScale, nextScale, nextScale);
                currScale = nextScale;


                // render
                renderer.render(scene, camera);

            }
            animate();


            // scroll 轉場動畫
            ctx = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: canvaRef.current,
                    start: "top top",
                    end: "+=10000",
                    pin: true,
                    onLeave: () => {
                    },
                })
            })


            let isScrolled = false;
            const lenis = window.lenis;
            lenis.on("scroll", () => {
                if (lenis.scroll > 500 && !isScrolled) {
                    modelTransition.forEach((model) => {
                        console.log(model.material);
                        if (!model.material) {
                            console.warn(model, "don't have material");
                            return;
                        }

                        model.material.transparent = true;
                        gsap.to(model.position, {
                            y: model.position.y + 100,
                            duration: 100,
                            ease: "power1.out",
                        });

                        gsap.to(model.material, {
                            opacity: 0,
                            duration: 1,
                            ease: "power1.out",
                        })
                    })
                    isScrolled = true;
                }
            })
        })


        return () => {
            isMounted = false;
            canvaRef.current.removeChild(renderer.domElement);
            if (ctx) {
                ctx.revert();
                console.log("cleaned ctx");
            }
        }
    },[])



    return (
        <>
            <div ref={canvaRef}>
            </div>        
            <div style={{height: 10000}}></div> 
        </>
       


    )

}







