import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { images } from '../../../utils/customFn';
import './add_edit_tabs.scss';

const AddEditTabs = ({ addtab, edittab }) => {
    return (
        <div className='blue-large-tabs'>
            <Tabs defaultActiveKey="add" id="add-edit-tabs" className="custom-tabs">
                <Tab
                    eventKey="add"
                    title={
                        <div className="title-flex">
                            <div className="icon">
                                <img src={images['shopping.svg']} alt="icon" />
                            </div>
                            <div className="content">
                                <h3>Add Product</h3>
                                <span>Add products by uploading Excel</span>
                            </div>
                        </div>
                    }
                >
                    {addtab}
                </Tab>
                <Tab
                    eventKey="edit"
                    title={
                        <div className="title-flex">
                            <div className="icon">
                                <img src={images['edit.svg']} alt="icon" />
                            </div>
                            <div className="content">
                                <h3>Edit Product</h3>
                                <span>Edit products in bulk</span>
                            </div>
                        </div>
                    }
                >
                    {edittab}
                </Tab>
            </Tabs>
        </div>
    );
};

export default AddEditTabs;
