import scrollToSection from '../script/index.js';
import MenuIcon from './icon-menu.js';
import { Link } from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import { time } from 'framer-motion/client';
import ScrollTrigger from 'gsap/ScrollTrigger'


function Navigation() {
    const navRef = useRef(null)

    useEffect(() => {
        const lenis = window.lenis;
        const nav = navRef.current;

        if (!nav || !lenis) {
            console.warn("Navigation 無法初始化")
            return;
        }

        // collapse navbar
        let prevScrollPos = 0;
        const SCROLL_HIDE_THRESHOLD = 1; // 👈 你想要的最小滑動距離
        
        const handleScroll = (lenis) => {

            const currentScrollPos = lenis.scroll;
            const scrollDiff = currentScrollPos - prevScrollPos;
        
            // 向上滾 or 靜止 or 回到頂部，顯示 navbar
            if (currentScrollPos < 50 || scrollDiff <= 0) {
                nav.classList.remove('navBar--hidden');
            } 
            // 向下滾動而且滑超過一定距離，才隱藏
            else if (scrollDiff > SCROLL_HIDE_THRESHOLD) {
                nav.classList.add('navBar--hidden');
            }
        
            prevScrollPos = currentScrollPos;
        };


        lenis.on("scroll", handleScroll);

        // change color
        const toggleDarkmode = (scrollTrigger) => {
            const El = scrollTrigger.trigger;

            console.log(El, El.dataset.color);
            if(El.dataset.color === "dark") {
                nav.classList.add("navBar--darkmode");
            } else if (El.dataset.color === "light") {
                nav.classList.remove("navBar--darkmode");
            }
        }

        document.querySelectorAll("section").forEach((sec) => {
            ScrollTrigger.create({
                trigger: sec,
                start: "top top",
                end: "bottom top",
                onEnter: toggleDarkmode,
                onEnterBack: toggleDarkmode,
            });
        });


        // 清除事件
        return () => {
            lenis.off("scroll", handleScroll);
        }
    }, []);

    return (
        <nav className='navBar' ref={navRef}>
            <div class="flex-row align-item-center">
                <img class="navBar__logo" src="/Logo.svg" />
                <p>飄忽不定工作室</p>
            </div>
    
            <div class="flex-row  align-item-center">
                <ul class="navBar__links">
                    <li>
                        <a onClick={() => scrollToSection("about")}>關於我們</a>
                    </li>
            
                    <li>
                        <a onClick={() => scrollToSection("portfolio")}>作品集</a>
                    </li>
            
                    <li>
                        <a onClick={() => scrollToSection("contact")}>聯絡我們</a>
                    </li>
                </ul>
            </div>
            
            {/* SideBar */}
            <label class="navBar__sideBar__overlap" for='navBar__checkbox'></label>
            <div class="navBar__sideBar">
                
                <div class="navBar__sideBar__header">
                    <img class="navBar__logo" src="/Logo.svg" />
                    <MenuIcon />
                </div>

                <div class="navBar__sideBar__content">
                    {/* 列表 */}
                    <ul class="navBar__sideBar__list">
                        <li>
                            <Link to='/'>
                                <p class="navBar__sideBar__listItem-CN">主頁</p>
                                <p class="navBar__sideBar__listItem-EN">Home</p>
                            </Link>

                        </li>

                        <li>
                            <Link to="/portfolio">
                                <p class="navBar__sideBar__listItem-CN">作品集</p>
                                <p class="navBar__sideBar__listItem-EN">Portfolio</p>
                            </Link>

                        </li>

                        <li>
                            <Link to='/blog'>
                                <p class="navBar__sideBar__listItem-CN">部落格</p>
                                <p class="navBar__sideBar__listItem-EN">Blog</p>
                            </Link>
                        </li>

                        <li>
                            <Link to='/componentKit'>
                                <p class="navBar__sideBar__listItem-CN">設計系統</p>
                                <p class="navBar__sideBar__listItem-EN">Design System</p>
                            </Link>
                        </li>

                        <li>
                            <Link to='/testUse'>
                                <p class="navBar__sideBar__listItem-CN">測試用</p>
                                <p class="navBar__sideBar__listItem-EN">Test Use</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div class="navBar__sideBar__footer"></div>

            </div>

            {/* Menu button */}
            <input class="navBar__checkbox" type="checkbox" id="navBar__checkbox" />

            <label class="navBar__menuBtn" for="navBar__checkbox">
                <div class="navBar__menuBtn-line"></div>
                <div class="navBar__menuBtn-line"></div>
                <div class="navBar__menuBtn-line"></div>
            </label>
        </nav>
    )
}

export default Navigation;