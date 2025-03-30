import Tab from "../components/tab/tab";
import Card_protfolio from "../components/card/Card-portfolio";
import AddIcon from "../components/icon/icon-add";
import MotionButtonTest from "../components/button/motionButtonTest";
import ButtonWithIcon from "../components/button/buttonWithIcon";
import IconButton from "../components/button/IconButton";
import ThreeScene from "../components/ThreeScene";
import SmoothScroll from "../components/smoothScroll";
import Parallax from "../components/parallax";


// locomotive
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";



import FoldableCard from '../components/FoldableCard.js';
import FoldableCard_2 from '../components/FoldableCard_2.js';
import { useNavigate } from "react-router-dom";
import scrollToSection from '../script/index.js';
import Button from '../components/button/Button.js';
import '../styles/home.css'
import FadeInSection from '../components/FadeInSection.js';
import Tab_portfolio from '../components/tab/tab-portfolio.js';
import { useRef } from 'react';




export default function TestUse() {
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
  
    return (
      <main data-scroll-container>
        {/* ------------------ 區塊 (無需觸發 call，就不加 data-scroll) ------------------ */}
        <section data-scroll-section>
          <div className="navBar-spacer"></div>
  
          <AddIcon />
  
          <div className="mt-m ml-l mb-l">
            <MotionButtonTest>label</MotionButtonTest>
          </div>
          <div className="mt-m ml-l mb-l">
            <MotionButtonTest outline={true}>label</MotionButtonTest>
          </div>
          <div className="mt-m ml-l mb-l">
            <ButtonWithIcon>label</ButtonWithIcon>
          </div>
          <div className="mt-m ml-l mb-l">
            <ButtonWithIcon outline={true}>label</ButtonWithIcon>
          </div>
          <div className="mt-m ml-l mb-l">
            <IconButton />
          </div>
        </section>
  
        {/* ------------------ 範例 1：dark 區塊 ------------------ */}
        <section
            data-scroll-section
            data-scroll                  // ★ 一定要加
            data-scroll-call="dark-section"
            data-scroll-repeat="true"
            data-scroll-offset="100%"
            data-color="dark"
            className="home home--about"
            style={{ height: "200vh" }}
        >
          {/* 你的內容... */}
        </section>
  
        {/* ------------------ 範例 2：light 區塊 ------------------ */}
        <section
            data-scroll-section
            className="home--hero"
            style={{ height: "200vh" }}
        >
          {/* 你的內容... */}
        </section>
  
        {/* ------------------ 範例 3：dark 區塊 ------------------ */}
        <section
            data-scroll-section
            data-scroll
            data-scroll-call="dark-section"
            data-scroll-repeat="true"
            data-scroll-offset="100%"
            data-color="dark"
            className="home home--about"
            style={{ height: "200vh" }}
        >
          {/* 你的內容... */}
        </section>
  
        {/* ------------------ 範例 4：light 區塊 ------------------ */}
        <section
            data-scroll-section
            className="home--hero"
            style={{ height: "200vh" }}
        >
          {/* 你的內容... */}
        </section>
      </main>
    );
  }