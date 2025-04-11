import React, { useState } from 'react'
import './addproduct.scss'
import { images } from '../../../utils/customFn';
const AddUploadFiles = () => {
        const [filename, setFilename] = useState(null);
        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            if (file) {
                setFilename(file)
            }
        };
    return (
        <div className='download-table'>
            <div className='theme-card'>
                <div className='action_btn'>
                    <button type='button' className='orange_button'>Download Template</button>
                    <button type='button' className='orange_border_btn'>Download Category List</button>
                </div>
                <div className='upload-image-wrapped'>
                    <div className="upload-box"
                        onClick={() => document.getElementById('file-input').click()}>
                        <img src={images['upload.svg']} alt="upload" className="upload-icon" />
                        <h3>Click here or drag to Upload file</h3>
                        {filename &&
                            <p>{filename.name}</p>
                        }
                        <input
                            type="file"
                            id="file-input"
                            style={{ display: 'none' }}
                            onChange={handleImageUpload} />
                    </div>
                </div>
                <div className='data-table-wrapped'>
                    <div className='data-table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Track ID</th>
                                    <th>Date</th>
                                    <th>User</th>
                                    <th>File</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>D1001</td>
                                    <td>05/10/2024 05:35:02</td>
                                    <td>Arc Super Admin</td>
                                    <td>Template</td>
                                    <td>afrar@fairbay.lk</td>
                                </tr>
                                <tr>
                                    <td>D1001</td>
                                    <td>05/10/2024 05:35:02</td>
                                    <td>Arc Super Admin</td>
                                    <td>Template</td>
                                    <td>afrar@fairbay.lk</td>
                                </tr>
                                <tr>
                                    <td>D1001</td>
                                    <td>05/10/2024 05:35:02</td>
                                    <td>Arc Super Admin</td>
                                    <td>Template</td>
                                    <td>afrar@fairbay.lk</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUploadFiles
