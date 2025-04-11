import React from 'react'
import './deliverydetails.scss'
import { Icons } from '../../../utils/customFn';

const DeliveryDetails = () => {
    return (
        <div className='delivery-card'>
            <div className='theme-card'>
                <div className='card-heading'>
                    <h2>Delivery Details</h2>
                </div>
                <div className='input-main-data'>
                    <label>Name</label>
                    <div className='input-text'>
                        Priya Ram
                    </div>
                </div>
                <div className='input-main-data'>
                    <label>Receiver Address</label>
                    <div className='input-text'>
                        5/3, Ramakrishnan Road, Wellawatta,<br />
                        Colombo 03<br />
                        Western Province
                    </div>
                </div>
                <div className='input-main-data'>
                    <label>Receiver Phone</label>
                    <div className='input-text'>
                        071 123 4567
                    </div>
                </div>
                <div className='pay-here'>
                    <div className='input-text'>
                        PayHere
                    </div>
                    <div>
                        <button type='button' className='home-btn'>
                            <img src={Icons['home-orange.svg']} alt='home' /> Home
                        </button>
                    </div>
                </div>
                <div className='shipping'>
                    <button type='button'>Free Shipping</button>
                </div>
            </div>
        </div>
    )
}

export default DeliveryDetails;