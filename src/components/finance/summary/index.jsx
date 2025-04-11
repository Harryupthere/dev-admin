import React from 'react'
import './summary.scss'
import { DateRangePicker } from 'rsuite';
import { Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const FinanceSummary = () => {

    return (
        <div className='finance-summery'>
            <div className='common-filter-design action-card'>
                <div className='left-side'>
                    <div className='input-with-select'>
                        <InputGroup>
                            <DropdownButton title="Period">
                                <Dropdown.Item href="#">Shop SKU</Dropdown.Item>
                                <Dropdown.Item href="#">FairBay SKU Name</Dropdown.Item>
                            </DropdownButton>
                            <DateRangePicker showOneCalendar className='right-date-picker' placement='autoVerticalEnd' />
                        </InputGroup>
                    </div>
                    <div className='reset'>
                        <button type='button' className='orange_button'>Collapse All</button>
                    </div>
                </div>
                <div className='right-side'>
                    <button type='button' className='blue_button'>Download Excel</button>
                </div>
            </div>

            <div className='theme-card'>
                <div className='summary-layout'>
                    <div className='sumary_row total-price'>
                        <div className='title'>
                            <h2>Delivered Orders</h2>
                        </div>
                        <div className='summary_item'>
                            <Accordion defaultActiveKey={['0','1']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <span>Total Sales</span><span>Rs. 1,000,000</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <span>Total Refunded</span><span>Rs. -30,000</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div className='total'>
                                <h3>Gross Profit</h3>
                                <h3>Rs. 900,000</h3>
                            </div>
                        </div>
                    </div>


                    <div className='sumary_row'>
                        <div className='title'>
                            <h2>Returned Orders</h2>
                        </div>
                        <div className='summary_item'>
                            <Accordion defaultActiveKey={['0','1']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <span>Total Refunded</span><span>Rs. -30,000</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>


                    <div className='sumary_row'>
                        <div className='title'>
                            <h2>Exchanged Orders</h2>
                        </div>
                        <div className='summary_item'>
                            <Accordion defaultActiveKey={['0','1']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <span>Damages & Lost</span><span>Rs. -30,000</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                    <div className='sumary_row'>
                        <div className='title'>
                            <h2>Expenses</h2>
                        </div>
                        <div className='summary_item'>
                            <Accordion defaultActiveKey={['0','1']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <span>Delivery Expenses</span><span>Rs. 1,000,000</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <span>Subscriptions</span><span>Rs. -10,000</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='item'>
                                            <h3>Total item price paid</h3>
                                            <h3>Rs. 900,000</h3>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div className='total'>
                                <h3>Net Profit</h3>
                                <h3>Rs. 65,000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinanceSummary;
