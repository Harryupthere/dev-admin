import React from "react";
import { Accordion } from "react-bootstrap";
import './categoriestable.scss'
import { IconEditInput, PlusButton, TranshIcon } from "../../../icons/icons";

const RecursiveAccordion = ({ items, parentKey = "", isChild = false }) => {
    return (
        <div className="categories-table">
            <Accordion alwaysOpen>
                {items?.map((item, index) => {
                    const itemKey = `${parentKey}-${index}`;
                    const itemClass = isChild ? "child-accordion-item" : "parent-accordion-item";
                    return (
                        <Accordion.Item eventKey={itemKey} key={itemKey} className={itemClass}>
                            <Accordion.Header>
                                <div className="main-header">
                                    <div className="title">{item.title}</div>
                                    <div className="right-content">
                                        <div className="id"><span>10001</span></div>
                                        <div className="prod"><span>20</span></div>
                                        <div className="action">
                                            <button type="button" className="bg-transparent"><PlusButton /></button>
                                            <button type="button" className="edit">Edit <IconEditInput /></button>
                                            <button type="button" className="bg-transparent"><TranshIcon /></button>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                {/* Always ensure list content */}
                                {item.children && (
                                    <RecursiveAccordion items={item.children} parentKey={itemKey} isChild={true} />
                                )}
                                {Array.isArray(item.content) && (
                                    <ul className="main-ul">
                                        {item.content.map((listItem, idx) => (
                                            <li key={idx}>
                                                <div className="main-header body-content">
                                                    <div className="title">{listItem}</div>
                                                    <div className="right-content">
                                                        <div className="id"><span>10001</span></div>
                                                        <div className="prod"><span>20</span></div>
                                                        <div className="action">
                                                            <button type="button" className="bg-transparent"><PlusButton /></button>
                                                            <button type="button" className="edit">Edit <IconEditInput /></button>
                                                            <button type="button" className="bg-transparent"><TranshIcon /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </div>
    );
};
export default RecursiveAccordion