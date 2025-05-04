import scrollToSection from '../../script/index.js';
import MenuIcon from '../icon-menu.js';
import { Link } from "react-router-dom";
import {useState, useEffect, useRef, use} from "react";
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from './navbar.module.css';
import classNames from 'classnames';

export default function Navbar({darkmode=false}) {
    const navRef = useRef(null)
    const [darkmode_, setdarkmode_] = useState(darkmode);
    
    useNavCollapse(navRef);

    // 改變darkmode條件情況：外部props輸入、section變化
    useEffect(() => {
        setdarkmode_(darkmode);
    }, [darkmode])
    
    useNavDarkmode(navRef, setdarkmode_);

    return (
        <nav className={classNames(styles.navbar, darkmode_ && styles.darkmode)} ref={navRef}>
            <div className="flex-row align-item-center">
                {logo}
                <p>飄忽不定工作室</p>
            </div>
    
            <div className="flex-row  align-item-center">
                <ul className={styles.links}>
                    <li><a onClick={() => scrollToSection("about")}>關於我們</a></li>
                    <li><a onClick={() => scrollToSection("portfolio")}>作品集</a></li>
                    <li><a onClick={() => scrollToSection("contact")}>聯絡我們</a></li>
                </ul>
            </div>

            <Sidebar />

            {/* Menu button */}
            <input className={styles.trigger} type="checkbox" id="navBar__checkbox" />

            <label className={classNames(styles.menuBtn)} htmlFor="navBar__checkbox">
                <div className={classNames(styles.menuBtnLine, darkmode_ && styles.darkmode)}></div>
                <div className={classNames(styles.menuBtnLine, darkmode_ && styles.darkmode)}></div>
                <div className={classNames(styles.menuBtnLine, darkmode_ && styles.darkmode)}></div>
            </label>
        </nav>
    )
}


function Sidebar() {
    return (
        <>
            {/* SideBar */}
            <label className={styles.sidebar_overlap} htmlFor='navBar__checkbox'></label>
            <div className={styles.sidebar}>
                
                <div className={styles.sidebar_header}>
                    <img className={styles.logo} src="/Logo.svg" />
                    <MenuIcon />
                </div>

                <div className={styles.sidebar_listWrap}>
                    {/* 列表 */}
                    <ul className={styles.sidebar_list}>
                        {sidebarList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.link}>
                                        <p>{item.CN}</p>
                                        <p>{item.EN}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className={styles.sidebar_footer}></div>
            </div>
        </>
    )
}

const sidebarList = [
    {
        CN: "主頁",
        EN: "Home",
        link: "/"
    },
    {
        CN: "作品集",
        EN: "Portfolio",
        link: "/portfolio"
    },
    {
        CN: "部落格",
        EN: "Blog",
        link: "/blog"
    },
    {
        CN: "設計系統",
        EN: "Design System",
        link: "/componentKit"
    },
    {
        CN: "測試用",
        EN: "Test Use",
        link: "/testUse"
    },

]

const logo = (
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.05 384.47" className={styles.logo}>
        <defs>
            <style>
                {`
                    .cls-1 {
                        fill: currentColor;
                    }
                    .cls-2{
                        font-family: HiraKakuProN-W3-83pv-RKSJ-H, 'Hiragino Kaku Gothic ProN';
                        font-size: 57.58px;
                    }
                    .cls-2,.cls-3 {
                        fill: currentColor;
                    }
                    .cls-3 {
                        font-family: MuseoModerno-Medium, MuseoModerno;
                        font-size: 22.44px;font-weight:500;letter-spacing:.8em;
                    }
                `}
            </style>
        </defs>
        <g id="Layer_1-2">
            <text className="cls-2" transform="translate(0 330.67)">
                <tspan x="0" y="0">
                    飄忽不定工作室
                </tspan>
            </text>
            <text className="cls-3" transform="translate(12.92 375.5)">
                <tspan x="0" y="0">
                    Erratic Studio
                </tspan>
            </text>
            <path className="cls-1" d="M150.04,236.43c-9.21,0-44.07-.93-54.06-2.96C29.77,219.92,1.71,164.03,3.28,114.65,4.85,65.14,36.95,10.94,105.13,1.43c6.98-.97,38.06-1.43,44.92-1.43,2.97,0,5.38,2.41,5.38,5.38s-2.41,5.38-5.38,5.38c-8.71,0-37.63.52-43.43,1.33C44.65,20.73,15.47,70,14.04,115c-1.42,44.86,24.03,95.63,84.11,107.93,8.22,1.68,40.48,2.74,51.9,2.74,2.97,0,5.38,2.41,5.38,5.38s-2.41,5.38-5.38,5.38Z"/>
            <path className="cls-1" d="M215.7,10.76h-65.65c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38h65.65c2.97,0,5.38,2.41,5.38,5.38s-2.41,5.38-5.38,5.38Z"/>
            <path className="cls-1" d="M150.04,135.35c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38c9.02,0,46.61-.27,54.41-.76,3.03-.15,5.52,2.08,5.7,5.04.18,2.96-2.07,5.52-5.04,5.7-8.4.52-46.96.78-55.07.78Z"/>
            <path className="cls-1" d="M150.04,135.35h-85.36c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38h85.36c2.97,0,5.38,2.41,5.38,5.38s-2.41,5.38-5.38,5.38Z"/>
            <path className="cls-1" d="M191.76,240.72c-2.97,0-5.38-2.41-5.38-5.38V22.53c0-2.97,2.41-5.38,5.38-5.38s5.38,2.41,5.38,5.38v212.81c0,2.97-2.41,5.38-5.38,5.38Z"/>
            <path className="cls-1" d="M352.96,240.72c-18.81,0-41.82-16.16-47.44-46.11-4.92-26.23-22.06-61.09-113.76-61.09-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38c111.24,0,121.1,52.58,124.34,69.86,4.55,24.25,22.39,37.34,36.86,37.34s30.58-3.5,36.2-30.8c.6-2.91,3.45-4.79,6.36-4.18,2.91.6,4.79,3.45,4.19,6.36-5.46,26.5-20.75,39.39-46.74,39.39Z"/>
            <path className="cls-1" d="M204.79,134.58c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38c72.86,0,114.65-20.43,114.65-56.04,0-8.18-2.74-23.89-21.08-37.13-18.02-13.01-46.59-19.88-82.59-19.88-3.19-.05-5.44-2.39-5.44-5.38s2.41-5.38,5.38-5.38h.06c38.83,0,68.73,7.37,88.89,21.92,22.23,16.04,25.55,35.61,25.55,45.86,0,60.29-87.7,66.81-125.41,66.81Z"/>
        </g>
    </svg>
);


const useNavCollapse = (navRef) => {
    useEffect(() => {
        // check variable
        if (!window.lenis) {
            console.error("Lenis is not defined");
            return;
        } else if (!navRef.current) {
            console.error("nav is not defined");
            return;
        }

        const lenis = window.lenis;
        let prevScrollPos = 0;
        const SCROLL_HIDE_THRESHOLD = 1; // 👈 你想要的最小滑動距離
        
        const handleScroll = (lenis) => {

            const currentScrollPos = lenis.scroll;
            const scrollDiff = currentScrollPos - prevScrollPos;
        
            // 向上滾 or 靜止 or 回到頂部，顯示 navbar
            if (currentScrollPos < 50 || scrollDiff <= 0) {
                navRef.current.classList.remove(styles.hidden);
            } 
            // 向下滾動而且滑超過一定距離，才隱藏
            else if (scrollDiff > SCROLL_HIDE_THRESHOLD) {
                navRef.current.classList.add(styles.hidden);
            }
        
            prevScrollPos = currentScrollPos;
        };


        lenis.on("scroll", handleScroll);   

        return () => {
            lenis.off("scroll", handleScroll);
        }
    }, [])
}



const useNavDarkmode = (navRef, setDarkmode) => {
    useEffect(() => {
        if (!navRef.current) {
            console.error("nav is not defined");
            return;
        }

        const toggleDarkmode = (scrollTrigger) => {
            const El = scrollTrigger.trigger;

            if(El.dataset.color === "dark") {
                setDarkmode(true);
            } else if (El.dataset.color === "light") {
                setDarkmode(false);
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

        return () => {
            document.querySelectorAll("section").forEach((sec) => {
                ScrollTrigger.getAll().forEach((trigger) => {
                    trigger.kill();
                });
            });
        }
    }, []);
}