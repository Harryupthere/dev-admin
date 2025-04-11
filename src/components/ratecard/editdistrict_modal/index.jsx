import React from 'react'
import { CrossIcon } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';

const EditDistrictModal = ({ openModal, closeModal }) => {
    return (
        <Modal show={openModal} className='fairbay_modals edit-district' centered>
            <div className='modal_header'>
                <div className='main_heading'><h2>Edit by District</h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body'>
                <div className='apply-filter'>
                    <div className='input-main-data'>
                        <input type='text' placeholder='Enter Rate' />
                    </div>
                    <div className='input-main-data'>
                        <input type='text' placeholder='Enter Additional KG Rate' />
                    </div>
                    <div className='apply-btn'>
                        <button type='button' className='orange_button'>Apply to All</button>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>District</th>
                        <th>Rate</th>
                        <th>Additional Kg</th>
                    </tr>
                    <tr>
                        <td>Ampara</td>
                        <td><div className='input-main-data'><input type='text' value="Rs.400"/></div></td>
                        <td><div className='input-main-data'><input type='text' value="Rs.80"/></div></td>
                    </tr>
                    <tr>
                        <td>Ampara</td>
                        <td><div className='input-main-data'><input type='text' value="Rs.400"/></div></td>
                        <td><div className='input-main-data'><input type='text' value="Rs.80"/></div></td>
                    </tr><tr>
                        <td>Ampara</td>
                        <td><div className='input-main-data'><input type='text' value="Rs.400"/></div></td>
                        <td><div className='input-main-data'><input type='text' value="Rs.80"/></div></td>
                    </tr><tr>
                        <td>Ampara</td>
                        <td><div className='input-main-data'><input type='text' value="Rs.400"/></div></td>
                        <td><div className='input-main-data'><input type='text' value="Rs.80"/></div></td>
                    </tr><tr>
                        <td>Ampara</td>
                        <td><div className='input-main-data'><input type='text' value="Rs.400"/></div></td>
                        <td><div className='input-main-data'><input type='text' value="Rs.80"/></div></td>
                    </tr>
                </table>
            </div>
            <div className='modal_footer withborder'>
                <div className='action_btn ms-auto'>
                    <button type='button' className='orange_border_btn' onClick={closeModal}>
                        Close
                    </button>
                    <button type='button' className='orange_button' onClick={closeModal}>
                        Save
                    </button>
                </div>
            </div>
        </Modal>
    )
}
export default EditDistrictModal
