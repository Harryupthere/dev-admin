import React from "react";
import MenuItems from "../menuitems";
import { Sidebar } from "react-pro-sidebar";
import './sidebar.scss'
import useSidebar from "./sidebarUtils";
import { DownIcon } from "../../../icons/icons";


const SidebarDashboard = () => {
  // const [collapsed, setCollapsed] = React.useState(false);
  const { isCollapsed, togggleSidebar } = useSidebar();
  return (
    <>
      <div className="main-sidebar">
        <Sidebar collapsed={isCollapsed}>
          <MenuItems />
        </Sidebar>
        <main>
          <button className="toggle-button" onClick={togggleSidebar}>
            <DownIcon />
          </button>
        </main>
      </div>

    </>
  );
}
export default SidebarDashboard;