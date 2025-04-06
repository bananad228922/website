import { useNavigate } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";


export default function useNavDarkmode() {
    const navigate = useNavigate();

    useEffect(() => {
    // 建立 LocomotiveScroll 實例
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
    });

    // 監聽 call 事件
    scroll.on('call', (value, way, obj) => {
        // value = data-scroll-call 的值 (這裡是 "section-in")
        // way = 'enter' | 'leave'
        // obj.el = 觸發此事件的 DOM 元素
        const el = obj.el;
        const sectionColor = el.dataset.color;

        if (value === 'dark-section') {
        if (way === 'enter') {
            console.log('✅ 進入區塊', el);
            document.querySelector('nav')?.classList.add('navBar--darkMode');
        }
        if (way === 'exit') {
            console.log('❌ 離開區塊', el);
            document.querySelector('nav')?.classList.remove('navBar--darkMode');
        }
        }
    });

    // 清理
    return () => {
        scroll.destroy();
    };
    }, []);    
}

