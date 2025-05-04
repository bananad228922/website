import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function ThreeScene() {
    const mountRef = useRef(null);
    const modelRef = useRef(null);
    const mouseRotation = useRef({ x: 0, y: 0 });

    const baseRotationRef = useRef({ x: 0, y: 0 }); // 紀錄自旋轉量
    const mouseOffset = {x: 0, y: 0};

    useEffect(() => {
        // 1️⃣ 建立場景
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 1, 5);

        // 2️⃣ 建立渲染器
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        if (mountRef.current) {
            while (mountRef.current.firstChild) {
                mountRef.current.removeChild(mountRef.current.firstChild);
            }
            mountRef.current.appendChild(renderer.domElement);
        }

        // 3️⃣ 加入燈光
        const light = new THREE.DirectionalLight(0xffffff, 10);
        light.position.set(2, 2, 5);
        scene.add(light);

        // 4️⃣ 載入 3D 模型
        const loader = new GLTFLoader();
        loader.load("./3dAsset.glb", (gltf) => {
            const model = gltf.scene;
            modelRef.current = model;
            model.position.set(0, 0, 0);
            scene.add(model);
        });

        // 5️⃣ 監聽滑鼠
        function onMouseMove(event) {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = (event.clientY / window.innerHeight) * 2 - 1;
            
            // 模型 rotation
            mouseRotation.current.x = mouseX * Math.PI * 0.2;
            mouseRotation.current.y = -mouseY * Math.PI * 0.2;
            
            // 模型 position 偏移
            mouseOffset.x = mouseX * 0.15;
            mouseOffset.y = mouseY * 0.15;
        }
        window.addEventListener("mousemove", onMouseMove);

        // 6️⃣ 動畫迴圈
        function animate() {
            requestAnimationFrame(animate);

            if (modelRef.current) {
                baseRotationRef.current.x += 0.01;

                // 疊加滑鼠旋轉
                modelRef.current.rotation.x = mouseRotation.current.y;
                // 疊加滑鼠的 X 旋轉
                modelRef.current.rotation.y = mouseRotation.current.x + baseRotationRef.current.x;

                modelRef.current.position.x = mouseOffset.x;
                modelRef.current.position.y = mouseOffset.y;
            }
            renderer.render(scene, camera);
        }
        animate();

        // 7️⃣ 清理
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} />;
}

export default ThreeScene;