import ButtonWithIcon from "../components/button/buttonWithIcon/buttonWithIcon";

export default {
    title: "Button", 
    component: ButtonWithIcon, 
};


export const ButtonWithIcon_Story = (args) => <ButtonWithIcon {...args}></ButtonWithIcon>
ButtonWithIcon_Story.args = {
    outline: false,
    children: "button",
    size: "medium",
    onClick: () => alert("clicked"),
}


