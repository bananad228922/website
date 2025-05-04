import { Paralax } from "../../pages/home/home";
import { DefaultIconOctahedron } from "../3d/icon3d";

function Footer() {
    return (
        <section className="footer" >
            <div className="container">
                <div className="footer__content">
                    <div style={{position: "absolute", bottom: "100vh"}}>
                        <Paralax paralax={500} end="top top">
                            <DefaultIconOctahedron width={1000} height={500} />
                        </Paralax>                        
                    </div>

                    
                    <div className="footer__link-icons">
                        {/* links */}
                        <a href="https://www.behance.net/9b89e3ef" target="_blank">
                            <img className="icon-m" src="/icon-behance.svg"/>
                        </a>

                        <a href="" target="_blank">
                            <img className="icon-m" src="/icon-line.svg"/>
                        </a>

                        <a href="" target="_blank">
                            <img className="icon-m" src="/icon-mail.svg" />
                        </a>
                    </div>

                    
                </div>
            </div>

        </section>
    );
}

export default Footer;