import scrollToSection from '../script/index.js';
import MenuIcon from './icon-menu.js';
import { Link } from "react-router-dom";


function Navigation() {
    // function scrollToSection(targetId) {
    //     document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    // }

    return (
        <navigation class="navBar">
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
            <div class="navBar__sideBar__overlap"></div>
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
        </navigation>
    )
}

export default Navigation;