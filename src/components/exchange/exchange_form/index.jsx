import React, { useState } from 'react'
import { images } from '../../../utils/customFn'
import { IconEditInput } from '../../../icons/icons'
import RejectClaimModal from '../../ordersModal/returnClaimModal'
import AcceptClaimModal from '../../ordersModal/acceptClaimModal'


const ExhangeReviewForm = () => {

  const [openAcceptClaim,setOpenAcceptClaim] = useState(false);
  const[openRejectClaim,setOpenRejectClaim] = useState(false);
  
  const handleOpenAccept = () =>{
    setOpenAcceptClaim(true)
  }
  const handleCloseAccept = () =>{
    setOpenAcceptClaim(false)
  }

  const handleOpenReject = () =>{
    setOpenRejectClaim(true)
  }
  const handleCloseReject = () =>{
    setOpenRejectClaim(false)
  }
  return (
    <div className='review-form'>
      <div className='theme-card'>
        <div className='form-header'>
          <div className='lef-side'>
            <div className='profile'>
              <img src={images['avatar.png']} alt='img' />
              <div className='name'>Priya Ram</div>
            </div>
            <div className='border-blue'></div>
            <div className='order-number'>
              <p>Order Number: <span>20241019005</span></p>
            </div>
          </div>
          <div className='right-side'>
            <p>Order Date: 05/10/2024 14:03</p>
          </div>
        </div>
        <div className='form-body'>
          <div className='two-section-divider'>
            <div className='items'>
              <div className='product-details'>
                <div className='item-img'><img src={images['samsung.png']} alt='product' /></div>
                <div className='item-details'>
                  <p>Samsung Galaxy S24 Ultra</p>
                  <p>Variant:<b>Titanium Yellow • 1TB/ 12GB RAM</b></p>
                  <p>FairBay SKU: Galaxy S24 Ultra - Titanium Yellow - 1TB/ 12GB RAM</p>
                </div>
              </div>
              <div className='table-section'>
                <h3 className='section-heading'>Order Summary</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Details</th>
                      <th>Unit Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item Price Paid by Buyer</td>
                      <td>Rs. 400,000</td>
                      <td>
                        <div className='qty'>x 5</div>
                      </td>
                      <td>Rs. 2,000,000</td>
                    </tr>
                    <tr className='colored'>
                      <td>Item Price</td>
                      <td>Rs. 450,000</td>
                      <td><div>x 5</div></td>
                      <td>Rs. 2,000,000</td>
                    </tr>
                    <tr className='colored'>
                      <td>Discount</td>
                      <td>Rs. 450,000</td>
                      <td><div>x 5</div></td>
                      <td>Rs. 2,000,000</td>
                    </tr>
                    <tr className='colored'>
                      <td>Shipping Fee</td>
                      <td></td>
                      <td></td>
                      <td>Rs. 350</td>
                    </tr>
                    <tr className='colored'>
                      <td>Shipping Fee Discount</td>
                      <td></td>
                      <td></td>
                      <td>Rs. -350</td>
                    </tr>
                    <tr className='colored'>
                      <td>Total Paid</td>
                      <td></td>
                      <td></td>
                      <td>Rs. 2,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='table-section'>
                <h3 className='section-heading' >Accept Claim</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Details</th>
                      <th>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item to be exchanged</td>
                      <td>
                      <div className='increase-input'>
                          <button type='button'>-</button>
                          <input type='input' defaultValue='0' />
                          <button type='button'>+</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type='button' className='orange_button' onClick={handleOpenAccept}>Accept Claim</button>
              </div>
            </div>
            <div className='items'>
              <div className='item-detail'>
                <p>Return Initiated by: Customer</p>
                <p>I didn’t receive the item I ordered</p>
                <p>Return Comment:<br />
                  I ordered s 24 ultra and received s23 ultra!</p>
              </div>
              <div className='table-section'>
                <h3 className='section-heading'>Exchange Request</h3>
                <table >
                  <thead>
                    <tr>
                      <th>Details</th>
                      <th>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>To be exchanged</td>
                      <td>
                        <div className='qty'>x 5</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr style={{color:'var(--light-blue)',opacity:'1'}}/>

              </div>
              <div className='form-section'>
                <h3 className='section-heading'>Exchange Request</h3>
                <div className='input-main-data flex_data'>
                  <lable>Reject Reason</lable>
                  <div className='icon-input-bth'>
                    <input type='text' defaultValue="400,000" />
                    <div className='btn-edit-input'><IconEditInput /></div>
                  </div>
                </div>
                <div className='input-main-data'>
                  <label>Reject Comment</label>
                  <div className='icon-input-bth'>
                    <textarea rows={5} placeholder='Enter the nature of the rejection' />
                    <div className='btn-edit-input'><IconEditInput /></div>
                  </div>
                </div>
              </div>
              <button type='button' className='orange_border_btn' onClick={handleOpenReject}>Reject Claim</button>
            </div>
          </div>
          <div className='two-section-divider'>
            <div className='items'>
              <div className='product-details'>
                <div className='item-img'><img src={images['mouse.png']} alt='product' /></div>
                <div className='item-details'>
                  <p>Samsung Galaxy S24 Ultra</p>
                  <p>Variant:<b>Titanium Yellow • 1TB/ 12GB RAM</b></p>
                  <p>FairBay SKU: Galaxy S24 Ultra - Titanium Yellow - 1TB/ 12GB RAM</p>
                </div>
              </div>
              <div className='table-section'>
                <h3 className='section-heading'>Order Summary</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Details</th>
                      <th>Unit Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item Price Paid by Buyer</td>
                      <td>Rs. 400,000</td>
                      <td>
                        <div className='qty'>x 5</div>
                      </td>
                      <td>Rs. 2,000,000</td>
                    </tr>
                    <tr className='colored'>
                      <td>Item Price</td>
                      <td>Rs. 450,000</td>
                      <td><div>x 5</div></td>
                      <td>Rs. 2,000,000</td>
                    </tr>
                    <tr className='colored'>
                      <td>Discount</td>
                      <td>Rs. 450,000</td>
                      <td><div>x 5</div></td>
                      <td>Rs. 2,000,000</td>
                    </tr>
                    <tr className='colored'>
                      <td>Shipping Fee</td>
                      <td></td>
                      <td></td>
                      <td>Rs. 350</td>
                    </tr>
                    <tr className='colored'>
                      <td>Shipping Fee Discount</td>
                      <td></td>
                      <td></td>
                      <td>Rs. -350</td>
                    </tr>
                    <tr className='colored'>
                      <td>Total Paid</td>
                      <td></td>
                      <td></td>
                      <td>Rs. 2,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='table-section'>
                <h3 className='section-heading'>Accept Claim</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Details</th>
                      <th>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>Item to be exchanged</td>
                      <td>
                      <div className='increase-input'>
                          <button type='button'>-</button>
                          <input type='input' defaultValue='0' />
                          <button type='button'>+</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type='button' className='orange_button' onClick={handleOpenAccept}>Accept Claim</button>
              </div>
            </div>
            <div className='items'>
              <div className='item-detail'>
                <p>Return Initiated by: Customer</p>
                <p>I didn’t receive the item I ordered</p>
                <p>Return Comment:<br />
                  I ordered s 24 ultra and received s23 ultra!</p>
              </div>
              <div className='table-section'>
                <h3 className='section-heading'>Exchange Request</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Details</th>
                      <th>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>To be exchanged</td>
                      <td>
                        <div className='qty'>x 5</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr style={{color:'var(--light-blue)',opacity:'1'}}/>
              </div>
              <div className='form-section'>
                <h3 className='section-heading'>Exchange Request</h3>
                <div className='input-main-data flex_data'>
                  <lable>Reject Reason</lable>
                  <div className='icon-input-bth'>
                    <input type='text' defaultValue="400,000" />
                    <div className='btn-edit-input'><IconEditInput /></div>
                  </div>
                </div>
                <div className='input-main-data'>
                  <label>Reject Comment</label>
                  <div className='icon-input-bth'>
                    <textarea rows={5} placeholder='Enter the nature of the rejection' />
                    <div className='btn-edit-input'><IconEditInput /></div>
                  </div>
                </div>
              </div>
              <button type='button' className='orange_border_btn' onClick={handleOpenReject}>Reject Claim</button>
            </div>
          </div>
          <div className='two-section-divider'>
            <div className='items'>
              <div className='table-section'>
                <h3 className='section-heading'>Exchange Confirmation - Accepted Claims</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Details</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Items accepted for replacement</td>
                      <td>0</td>
                    </tr>
                    <tr className='colored'>
                      <td>Exchange Tracking Code</td>
                      <td>To be assigned</td>
                    </tr>
                  </tbody>
                </table>
                <div className='actions-btn'>
                  <button type='button' className='blue_button'>Assign Exchange</button>
                  <button type='button' className='orange_border_btn'>Save & Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AcceptClaimModal openModal={openAcceptClaim} closeModal={handleCloseAccept}/>
      <RejectClaimModal openModal={openRejectClaim} closeModal={handleCloseReject}/>
    </div>
  )
}

export default ExhangeReviewForm;
