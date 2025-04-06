import scrollToSection from '../script/index.js';
import MenuIcon from './icon-menu.js';
import { Link } from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import { time } from 'framer-motion/client';


function Navigation() {
    const nav = useRef(null)


    useEffect(() => {
        if (nav.current === null) return;

        const timeoutId = setTimeout(() => {
            const locoScroll = window.locoScroll; // 假設 Locomotive Scroll 已經初始化
            if (!locoScroll) {
                console.log("nav 沒有找到 locoScroll");
                return
            };
        

            // let prevScrollPos = 0;
            // const handleScroll = ({scroll}) => {
            //     // console.log(scroll.y);
            //     const currentScrollPos = scroll.y;

            //     if (currentScrollPos < 50 || currentScrollPos <= prevScrollPos) {
            //         nav.current.classList.remove('navBar--hidden'); // 向上滾動，顯示
            //     } else {
            //         nav.current.classList.add('navBar--hidden'); // 向下滾動，隱藏
            //     }
        
            //     prevScrollPos = currentScrollPos;
            // }

            let prevScrollPos = 0;
            const SCROLL_HIDE_THRESHOLD = 1; // 👈 你想要的最小滑動距離
            
            const handleScroll = ({ scroll }) => {
              const currentScrollPos = scroll.y;
              const scrollDiff = currentScrollPos - prevScrollPos;
            
              // 向上滾 or 靜止 or 回到頂部，顯示 navbar
              if (currentScrollPos < 50 || scrollDiff <= 0) {
                nav.current.classList.remove('navBar--hidden');
              } 
              // 向下滾動而且滑超過一定距離，才隱藏
              else if (scrollDiff > SCROLL_HIDE_THRESHOLD) {
                nav.current.classList.add('navBar--hidden');
              }
            
              prevScrollPos = currentScrollPos;
            };


            const handleCall = (value, way, obj) => {
                // value = data-scroll-call 的值 (這裡是 "section-in")
                // way = 'enter' | 'leave'
                // obj.el = 觸發此事件的 DOM 元素
                const el = obj.el;
                const sectionColor = el.dataset.color;
    
                if (value === 'is-nav-darkmode') {
                    if (way === 'enter') {
                        console.log('✅ 進入區塊', el);
                        if (sectionColor === 'dark') {
                            nav.current.classList.add('navBar--darkMode');
                        }
                        if (sectionColor === 'light') {
                            nav.current.classList.remove('navBar--darkMode');
                        }
                    }
                    if (way === 'exit') {
                        console.log('❌ 離開區塊', el);
                    }
                }                    
            }


            locoScroll.on("scroll", handleScroll);
            locoScroll.on('call', handleCall);

            // 清除事件
            return () => {
                locoScroll.off("scroll", handleScroll);
                locoScroll.off("call", handleCall);
                clearTimeout(timeoutId);
            }
        }, 1000)
    }, []);
    
    return (
        <nav className='navBar' ref={nav}>
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