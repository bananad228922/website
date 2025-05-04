import Tab from "../components/tab/tab/tab";

export default {
    title: "tabs",
    component: Tab,
    argTypes: {
        kind: {
            control: { type: 'select' },
            options: [ 'primary', 'secondary', 'outlinePrimary', "outlineSecondary" ],
        },
        size: {
            control: { type: "select" },
            options: [ "small", "medium", "large" ],
        }
    }
}

export const Tab_Story = (args) => <Tab {...args} />;
Tab_Story.args = {
    children: [
        <div>Tab 1 Content</div>,
        <div>Tab 2 Content</div>,
        <div>Tab 3 Content</div>,
    ],
    label: [
        <p>Tab 1</p>,
        <p>Tab 2</p>,
        <p>Tab 3</p>,
    ],
    kind: "primary",
    size: "medium",
}