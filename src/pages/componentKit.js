import Button from "../components/button/Button";
import '../styles/ComponentKit.css'


function ComponentKit() {
    return (
        <div>
            <section className="section--button">
                <div className="container">
                    <div className="section--button__content">
                        <h1 className="section--button__header">button</h1>

                        <div className="section--button__kind">
                            <div className="section--button__kind__group1">
                                <Button kind="primary">primary</Button>
                                <Button kind="outLine-primary">outLine-primary</Button>
                            </div>
                            <div className="section--button__kind__group2">
                                <Button kind="secondary">secondary</Button>
                                <Button kind="outLine-secondary">outLine-secondary</Button>                                
                            </div>

                        </div>

                        <div className="section--button__size">
                            <Button size="small">small</Button>
                            <Button size="medium">medium</Button>
                            <Button size="large">large</Button>
                        </div>  
                    </div>
                </div>


            
            </section>

        </div>

    );
}

export default ComponentKit;