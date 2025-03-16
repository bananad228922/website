import scrollToSection from '../hook/index.js';
import MenuIcon from './icon-menu.js';
import { Link } from "react-router-dom";
import {useState, useEffect, useRef} from "react";


function Navigation() {
    // function scrollToSection(targetId) {
    //     document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    // }
    const [visible, setVisible] = useState(true);
    const prevScrollPos = useRef(window.scrollY);
    const accumulatedScroll = useRef(0);
    const scrollTimeout = useRef(null);
  
    const MIN_SCROLL_DISTANCE = 100; // 向上滑動最小距離（可調整）
    const STOP_DELAY = 100; // 停止滾動多久後重置誤差 (毫秒)
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const delta = currentScrollPos - prevScrollPos.current;
  
        accumulatedScroll.current += delta;
  
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          // 停頓後，重置累積距離
          accumulatedScroll.current = 0;
        }, STOP_DELAY);
  
        if (currentScrollPos < 50) {
          setVisible(true); // 頂部強制顯示
        } else if (accumulatedScroll.current > MIN_SCROLL_DISTANCE) {
          setVisible(false); // 向下滾動超過指定距離，隱藏
          accumulatedScroll.current = 0;
        } else if (accumulatedScroll.current < -MIN_SCROLL_DISTANCE) {
          setVisible(true); // 向上滾動超過指定距離，顯示
          accumulatedScroll.current = 0;
        }
  
        prevScrollPos.current = currentScrollPos;
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    }, []);
    
    return (
        <nav className={`navBar ${visible ? '' : 'navBar--hidden'}`}>
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