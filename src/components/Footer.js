function Footer() {
    return (
        <section className="footer" >
            <div className="container">
                <div className="footer__content">
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