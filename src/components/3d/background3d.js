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
export function Background3d() {
    const canvaRef = useRef(null);

    useLayoutEffect(() => {
        if (!canvaRef.current) {
            return;
        }
        const renderer = new THREE.WebGLRenderer({alpha: true});
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
            const size = Math.random() * 0.03;
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


        return () => {
            canvaRef.current.removeChild(renderer.domElement);
        }
    },[])



    return (
        <div ref={canvaRef}>
        </div>
    )
}


export function TestBackground3d() {
    return (
        <>
            <div style={{backgroundColor: "#333333"}}></div>
            {/* <Background3d /> */}
            <Background3dLight />
        </>

    )
}


export function Background3dLight() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 5);
        scene.add(camera);

        const light = new THREE.PointLight("#ffffff", 0.5, 1000);
        light.position.set(0, 10, 3);
        scene.add(light);

        
        const geometry = new THREE.PlaneGeometry(100, 100);
        const material = new THREE.MeshPhongMaterial();
        const plane = new THREE.Mesh(geometry, material);
        plane.position.set(0, 0, 0);
        scene.add(plane);


        let mouseX;
        let mouseY;
        document.addEventListener("mousemove", (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        const animate = () => {
            requestAnimationFrame(animate)
            light.position.set(mouseX*5, mouseY*5, 3);
            renderer.render(scene, camera);
        }   
        animate();


        return() => {
            containerRef.current.removeChild(renderer.domElement);
        }
    }, [])

    return (
        <div ref={containerRef}></div>
    )
}