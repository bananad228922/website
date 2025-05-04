import IconButton from "../components/button/iconButton/iconButton";

export default {
    title: "Button", 
    component: IconButton, 
}

export const IconButton_Story = (args) => <IconButton {...args}/>
IconButton_Story.args = {
    size: "medium",
    // onClick: () => alert("clicked"),
}