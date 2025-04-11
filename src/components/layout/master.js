import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import SidebarDashboard from "./sidebar";

const Master = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div className="main-layout">
                <div className="dashboard-sidebar">
                    <SidebarDashboard />
                </div>
                <div className="dashbord-page-content">
                    <div className="all-router-data">
                        <Outlet />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Master;
