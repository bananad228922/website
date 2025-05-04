export async function checkSrcCorrect(src) {
    try {
        const res = await fetch(src, {method: "HEAD"});
        
        if(res.ok) {
            return true;
        } else {
            console.error(`Image not found: ${src}`);
            return false;
        }        
    } catch (error) {
        console.error(`Error fetching image: ${src}`, error);
        return false;
    }
}

export function getLenis() {
    if (window.lenis) {
        return window.lenis;
    } else {
        console.error("lenis not defined");
    }
}