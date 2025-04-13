import { useEffect, useLayoutEffect } from "react";


export default function ChildA() {
    useLayoutEffect(() => {
      console.log("ChildA - useLayoutEffect");
      return () => console.log("ChildA - layout cleanup");
    }, []);
  
    useEffect(() => {
      console.log("ChildA - useEffect");
      return () => console.log("ChildA - effect cleanup");
    }, []);
  
    return <ChildB />;
  }
  
function ChildB() {
    useLayoutEffect(() => {
      console.log("ChildB - useLayoutEffect");
      return () => console.log("ChildB - layout cleanup");
    }, []);
  
    useEffect(() => {
      console.log("ChildB - useEffect");
      return () => console.log("ChildB - effect cleanup");
    }, []);
  
    return <div>ChildB</div>;
}