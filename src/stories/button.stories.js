import {Button} from "../components/button/button/button";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        kind: {
            control: {type: "select"},
            options: ["primary", "secondary", "outline-primary", "outline-secondary"],
        },
        size: {
            control: {type: "select"},
            options: ["small", "medium", "large"],
        },
    }
}

export const Button_Story = (args) => <Button {...args}></Button>
Button_Story.args = {
    kind: "primary",
    size: "medium",
    children: "button",
    onClick: () => alert("clicked"),
}