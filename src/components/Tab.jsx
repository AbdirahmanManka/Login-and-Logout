import {Tabs} from "antd"
import Mock from "./Mock"
import EmployeesForm from "./EmployeesForm.jsx";
import "../styles/Tab.css"
export default function TabView() {
    return (
        <div className={"tab-wrapper-div"}>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Layout 1" key="1">
                  <Mock/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Layout 2" key="2">
                    <EmployeesForm/>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}