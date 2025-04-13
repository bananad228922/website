import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function ThreeSceneLine() {
    const containerRef = useRef(null);

    useEffect(() => {
        // 必要要素：
        // 1. 場景
        // 2. 物體
        // 3. 攝影機
        // 4. 燈光
        // 5. 渲染器
        

        // 設置場景
        const scene = new THREE.Scene();

        // 設置物體
        const loader = new GLTFLoader();
        loader.load("./3dAssetLine.glb", (gltf) => {
            const model = gltf.scene;
            model.position.set(0, 0, 0);
            scene.add(model);
        })

        // 設置攝影機
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 1, 5);

        // 設置燈光
        const light = new THREE.DirectionalLight();
        light.position.set(1, 1, 5);
        scene.add(light);

        // 設置渲染器
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth*4, window.innerHeight*4);
        renderer.setClearColor(0x000000, 0);

        const hasChild = containerRef.current.firstChild;
        if(hasChild) {
            containerRef.current.removeChild(containerRef.current.firstChild);
        }
        containerRef.current.appendChild(renderer.domElement);


        // 設置動畫
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        // 清除資源
        return () => {
            renderer.dispose();
        }
    }, [] )

    return (
        <div ref={containerRef}>
        </div>
    )
}