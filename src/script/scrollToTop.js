import { useEffect } from "react";

function ScrollToTop() {
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, []);
}

export default ScrollToTop;