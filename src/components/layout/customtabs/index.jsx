// CustomTabs.jsx
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const CustomTabs = ({ tabsData, defaultActiveKey }) => {
    return (
        <div className='commontabs'>
            <Tabs defaultActiveKey={defaultActiveKey} id="custom-tab-example">
                {tabsData?.map((tab, index) => (
                    <Tab eventKey={tab.eventKey} title={tab.title} key={index}>
                        {tab.content}
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default CustomTabs;
