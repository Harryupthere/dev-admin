import React from "react";
import { IconSearch } from "../../icons/icons";
import "./helpdesk.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import { images } from "../../utils/customFn";
import { Link } from "react-router-dom";

const HelpDesk = () => {
  // const BoldText = ({ children }) => (
  //   <span className="blod-text">{children}</span>
  // );
  return (
    <>
      <div className="help-desk-page page-data-layout">
        {/* <div className="heading-main">
          <h2>Help Center</h2>

        </div> */}
        <div className="search_input_page">
          <input placeholder="Search" />
          <button>
            <IconSearch />
          </button>
        </div>

        <div className="tab-data-main">
          <Tabs
            defaultActiveKey="faq"
            id="uncontrolled-tab-example"

          >
            <Tab eventKey="faq" title="FAQ">
              <div className="table-content-faq">
                <div className="acc-data-main">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        1. How to place an order
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                          <ol>
                            <li>Go to the items you willing to purchase.</li>
                            <li>Once you have found the items you willing to buy, Select the quantity as you need and click Buy now to procced directly or Add to Cart button to buy multiple items in a single order.
                            </li>
                            <li>Click on the Checkout button (Select the item you willing to shop if you added items to cart and click checkout)</li>
                            <li>Enter your delivery details (Name, Address & Phone number).</li>
                            <li>Choose your preferred payment method (Cash on Delivery or other payment options by PayHere).</li>
                            <li>Check your order details and click on the Proceed button</li>
                            <li>Verify your Delivery Details and click on the Confirm button to place the order (Click go back if you want to change the Delivery details and confirm with the correct details).</li>
                          </ol>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        2.How to place an order
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                          <ol>
                            <li>Go to the items you willing to purchase.</li>
                            <li>Once you have found the items you willing to buy, Select the quantity as you need and click Buy now to procced directly or Add to Cart button to buy multiple items in a single order.
                            </li>
                            <li>Click on the Checkout button (Select the item you willing to shop if you added items to cart and click checkout)</li>
                            <li>Enter your delivery details (Name, Address & Phone number).</li>
                            <li>Choose your preferred payment method (Cash on Delivery or other payment options by PayHere).</li>
                            <li>Check your order details and click on the Proceed button</li>
                            <li>Verify your Delivery Details and click on the Confirm button to place the order (Click go back if you want to change the Delivery details and confirm with the correct details).</li>
                          </ol>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        3. How do I write a review to a product?
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                          <ol>
                            <li>Go to the items you willing to purchase.</li>
                            <li>Once you have found the items you willing to buy, Select the quantity as you need and click Buy now to procced directly or Add to Cart button to buy multiple items in a single order.
                            </li>
                            <li>Click on the Checkout button (Select the item you willing to shop if you added items to cart and click checkout)</li>
                            <li>Enter your delivery details (Name, Address & Phone number).</li>
                            <li>Choose your preferred payment method (Cash on Delivery or other payment options by PayHere).</li>
                            <li>Check your order details and click on the Proceed button</li>
                            <li>Verify your Delivery Details and click on the Confirm button to place the order (Click go back if you want to change the Delivery details and confirm with the correct details).</li>
                          </ol>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        4. How to return an item?
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                          <ol>
                            <li>Go to the items you willing to purchase.</li>
                            <li>Once you have found the items you willing to buy, Select the quantity as you need and click Buy now to procced directly or Add to Cart button to buy multiple items in a single order.
                            </li>
                            <li>Click on the Checkout button (Select the item you willing to shop if you added items to cart and click checkout)</li>
                            <li>Enter your delivery details (Name, Address & Phone number).</li>
                            <li>Choose your preferred payment method (Cash on Delivery or other payment options by PayHere).</li>
                            <li>Check your order details and click on the Proceed button</li>
                            <li>Verify your Delivery Details and click on the Confirm button to place the order (Click go back if you want to change the Delivery details and confirm with the correct details).</li>
                          </ol>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        5. How to Cancel the order?
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                          <ol>
                            <li>Go to the items you willing to purchase.</li>
                            <li>Once you have found the items you willing to buy, Select the quantity as you need and click Buy now to procced directly or Add to Cart button to buy multiple items in a single order.
                            </li>
                            <li>Click on the Checkout button (Select the item you willing to shop if you added items to cart and click checkout)</li>
                            <li>Enter your delivery details (Name, Address & Phone number).</li>
                            <li>Choose your preferred payment method (Cash on Delivery or other payment options by PayHere).</li>
                            <li>Check your order details and click on the Proceed button</li>
                            <li>Verify your Delivery Details and click on the Confirm button to place the order (Click go back if you want to change the Delivery details and confirm with the correct details).</li>
                          </ol>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        6 . Is there warranty available for items?
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                          <ol>
                            <li>Go to the items you willing to purchase.</li>
                            <li>Once you have found the items you willing to buy, Select the quantity as you need and click Buy now to procced directly or Add to Cart button to buy multiple items in a single order.
                            </li>
                            <li>Click on the Checkout button (Select the item you willing to shop if you added items to cart and click checkout)</li>
                            <li>Enter your delivery details (Name, Address & Phone number).</li>
                            <li>Choose your preferred payment method (Cash on Delivery or other payment options by PayHere).</li>
                            <li>Check your order details and click on the Proceed button</li>
                            <li>Verify your Delivery Details and click on the Confirm button to place the order (Click go back if you want to change the Delivery details and confirm with the correct details).</li>
                          </ol>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        7. Is there warranty available for items?
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                          <ol>
                            <li>Go to the items you willing to purchase.</li>
                            <li>Once you have found the items you willing to buy, Select the quantity as you need and click Buy now to procced directly or Add to Cart button to buy multiple items in a single order.
                            </li>
                            <li>Click on the Checkout button (Select the item you willing to shop if you added items to cart and click checkout)</li>
                            <li>Enter your delivery details (Name, Address & Phone number).</li>
                            <li>Choose your preferred payment method (Cash on Delivery or other payment options by PayHere).</li>
                            <li>Check your order details and click on the Proceed button</li>
                            <li>Verify your Delivery Details and click on the Confirm button to place the order (Click go back if you want to change the Delivery details and confirm with the correct details).</li>
                          </ol>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        8. Is there warranty available for items?
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                          <ol>
                            <li>Go to the items you willing to purchase.</li>
                            <li>Once you have found the items you willing to buy, Select the quantity as you need and click Buy now to procced directly or Add to Cart button to buy multiple items in a single order.
                            </li>
                            <li>Click on the Checkout button (Select the item you willing to shop if you added items to cart and click checkout)</li>
                            <li>Enter your delivery details (Name, Address & Phone number).</li>
                            <li>Choose your preferred payment method (Cash on Delivery or other payment options by PayHere).</li>
                            <li>Check your order details and click on the Proceed button</li>
                            <li>Verify your Delivery Details and click on the Confirm button to place the order (Click go back if you want to change the Delivery details and confirm with the correct details).</li>
                          </ol>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact-us" title="Contact us">
              <div className="table-content-faq contect-accordion">
                <div className="acc-data-main">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="flex_icons">
                          <img src={images['customer-service.svg']} alt="icon" className="question-icon" />
                          <h3 className="question-title">Hotline Number</h3>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                          +94 70 343 5420
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="flex_icons">
                          <img src={images['whatsapp.svg']} alt="icon" className="question-icon" />
                          <h3 className="question-title">Whatsapp Number</h3>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                          +94 70 343 5420
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <div className="flex_icons">
                          <img src={images['fb.svg']} alt="icon" className="question-icon" />
                          <h3 className="question-title">Facebook</h3>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                        <Link to='#/'>Facebook.com/FairBay</Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <div className="flex_icons">
                          <img src={images['insta.svg']} alt="icon" className="question-icon" />
                          <h3 className="question-title">Instagram</h3>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top">
                        <Link to='#/'>Instagram.com/FairBay.lk</Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        <div className="flex_icons">
                          <img src={images['globe.svg']} alt="icon" className="question-icon" />
                          <h3 className="question-title">Website</h3>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="text-top"><Link to='www.fairbay.lk/contact'>www.fairbay.lk/contact</Link></div>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
              </div>
            </Tab>

          </Tabs>
        </div>
      </div>
    </>
  );
};

export default HelpDesk;
