import Navbar from "../components/navbar/navbar";
import Lenis from "@studio-freight/lenis";
import { MemoryRouter } from "react-router-dom";
import "../styles/styles.css"


const lenis = new Lenis();
window.lenis = lenis;

export default {
    title: "navbar",
    component: Navbar,
    decorators: [
        (Navbar_Story) => (
          <MemoryRouter>
            <Navbar_Story />
          </MemoryRouter>
        ),
      ],
}


export const Navbar_Story = (args) => <Navbar {...args}/>;

Navbar_Story.args = {
    darkmode: false,
}

