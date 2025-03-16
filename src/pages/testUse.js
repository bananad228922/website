import Tab from "../components/tab/tab";

function TestUse() {
    return (
        <div>
            <div className="navBar-spacer"></div>
            <Tab
                tabList={
                    [
                        {label: 'tab1', content: <p>This is panel 1</p>},
                        {label: 'tab2', content: <p>This is panel 2</p>},
                        {label: 'tab3', content: <p>This is panel 3</p>},
                        {label: 'tab4', content: <p>This is panel 4</p>},
                        {label: 'tab5', content: <p>This is panel 5</p>}
                    ]
                }
                labelStyle="outLine-secondary"
            />
        </div>
    )
}

export default TestUse;