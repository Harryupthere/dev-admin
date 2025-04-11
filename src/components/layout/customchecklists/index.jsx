import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './customechecklist.scss'
const CustomCheckList = ({ items ,headercheck=false}) => {
    const defaultKeys = items.map((_, index) => index.toString());

    return (
        <div className='custome-check-lists'>
            <Accordion defaultActiveKey={defaultKeys} alwaysOpen>
                {items.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                            <div className="checkcontainer">
                                {headercheck &&
                                    <input type="checkbox" />
                                }
                                {item.header}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {item?.checkboxes && item?.checkboxes?.length > 0 && (
                                <div className="checkbox-group">
                                    {item?.checkboxes?.map((checkbox, cbIndex) => (
                                        <div key={cbIndex} className={`${headercheck?'ps-5':''}  form-check`}>
                                            <div className="checkcontainer">
                                                <input type="checkbox" />
                                                <label>{checkbox.label}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    )
}

export default CustomCheckList
