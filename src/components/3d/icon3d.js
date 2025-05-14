import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import "./icon3d.css";



export function Icon3d({object3d, width, height}) {
    const containerRef = useRef(null);
    const canvaRef = useRef(null);

    useLayoutEffect(() => {
        if (!object3d) {
            console.error("object3d is undefined");
            return;
        }

        const renderer = new THREE.WebGLRenderer({alpha: true});
        if (!width || !height) {
            console.log("width or height is undefined");
            width = containerRef.current.getBoundingClientRect().width;
            height = containerRef.current.getBoundingClientRect().height;            
        }

        console.log(width, height);
        renderer.setSize(width, height);
        canvaRef.current = renderer.domElement;
        containerRef.current.appendChild(canvaRef.current);
        
        const scene = new THREE.Scene();
        
        const camera = new THREE.PerspectiveCamera(75, height/width, 0.1, 1000);
        camera.position.set(0, 0, 10);
        scene.add(camera);

        const light = new THREE.DirectionalLight("#ffffff", 7);
        light.position.set(0, 10, 2);
        scene.add(light);

        object3d.position.set(0, 0, 0);
        scene.add(object3d);

        const raycaster = new THREE.Raycaster();


        // 轉動邏輯
        const lastMouse = {x: 0, y: 0};
        const currMouse = new THREE.Vector2();

        const initSpeed = {x: 0.001, y: 0.005};
        const currSpeed = {x: 0, y: 0};
        const nextSpeed = {x: 0, y: 0};

        const damping = 0.1;
        const feedback = 0.5;
        

        document.addEventListener("mousemove", (event) => {
            // update to check if other El resize
            const canvaRect = canvaRef.current.getBoundingClientRect();
            
            currMouse.x = ((event.clientX - canvaRect.left) / width) * 2 - 1;
            currMouse.y = -((event.clientY - canvaRect.top) / height) * 2 + 1;

            if (raycaster.intersectObjects([object3d]).length > 0) {
                console.log("intersectObject");
                currSpeed.x = (currMouse.y - lastMouse.y) * feedback;
                currSpeed.y = (currMouse.x - lastMouse.x) * feedback;
            }

            lastMouse.x = currMouse.x;
            lastMouse.y = currMouse.y;
        })

        const animate = () => {
            requestAnimationFrame(animate);


            raycaster.setFromCamera(currMouse, camera);

            // 計算衰減
            nextSpeed.x = currSpeed.x + (initSpeed.x - currSpeed.x) * damping;
            nextSpeed.y = currSpeed.y + (initSpeed.y - currSpeed.y) * damping;
            
            object3d.rotateX(nextSpeed.x);
            object3d.rotateY(nextSpeed.y);

            object3d.rotateY(initSpeed.y);
            object3d.rotateX(initSpeed.x);

            
            // 重設變數
            currSpeed.x = nextSpeed.x;
            currSpeed.y = nextSpeed.y;

            renderer.render(scene, camera);
        }
        animate();

        return () => {
            containerRef.current.removeChild(canvaRef.current);
        }
    }, []);

    return (
        <div ref={containerRef} className="three-container">
        </div>
    )
}

export function TestIcon3d() {
    const color = "#ffffff";

    const octahedron = new THREE.Mesh(new THREE.OctahedronGeometry(3, 0), new THREE.MeshPhongMaterial({color: "#ffffff"}));
    const torus = new THREE.Mesh(new THREE.TorusGeometry(3), new THREE.MeshPhongMaterial({color: "#ffffff"}));
    const torusKnot = new THREE.Mesh(new THREE.TorusKnotGeometry(3), new THREE.MeshPhongMaterial({color: "#ffffff"}));

    return (
        <>
            <Icon3d object3d={octahedron}/>
            <Icon3d object3d={torus}/>
            <Icon3d object3d={torusKnot}/>
        </>

    )
}

export function DefaultIconOctahedron({width, height}) {
    const octahedron = new THREE.Mesh(new THREE.OctahedronGeometry(5, 0), new THREE.MeshPhongMaterial({color: "#ffffff"}));
    return (
        <Icon3d object3d={octahedron} width={width} height={height}/>
    )
}

export function DefaultIconTorus({width, height}) {
    const torus = new THREE.Mesh(new THREE.TorusGeometry(5), new THREE.MeshPhongMaterial({color: "#ffffff"}));
    return (
        <Icon3d object3d={torus} width={width} height={height}/>
    )
}

export function DefaultIconTorusKnot({width, height}) {
    const torusKnot = new THREE.Mesh(new THREE.TorusKnotGeometry(3), new THREE.MeshPhongMaterial({color: "#ffffff"}));
    return (
        <Icon3d object3d={torusKnot} width={width} height={height}/>
    )
}


export function DefaultIconCapsule({width, height}) {
    const capsule = new THREE.Mesh(new THREE.CapsuleGeometry(3, 5, 1, 4, 1), new THREE.MeshPhongMaterial({color: "#ffffff"}));
    return (
        <Icon3d object3d={capsule} width={width} height={height}/>
    )
}


export function DefaultIcon({width, height}) {
    const [model, setModel] = useState(null);

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load("/3dAsset.glb", (gltf) => {
            const scale = 2;
            gltf.scene.scale.set(scale, scale, scale);
            setModel(gltf.scene);
        });
    }, [])


    return model && (<Icon3d object3d={model} width={width} height={height}/>)
}


export function Icon3dInline({children}) {
    const containerRef = useRef(null);

    useEffect(() => {
        containerRef.current.querySelector("div").style.display = "inline";
        containerRef.current.querySelector("canvas").style.display = "inline";
    }, [])
    return (
        <span ref={containerRef}>
            {children}
        </span>
    )
}