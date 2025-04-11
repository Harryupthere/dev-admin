import React, { useState } from 'react'
import { images } from '../../../utils/customFn';
import { Link } from 'react-router-dom';

const EditUploadFiles = () => {
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
                                    <th>Email</th>
                                    <th>Modified</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>D1001</td>
                                    <td>05/10/2024 05:35:02</td>
                                    <td>Arc Super Admin</td>
                                    <td>afrar@fairbay.lk</td>
                                    <td>Basic Information</td>
                                    <td>60 Success/ 5 Fail/ 65 Total</td>
                                    <td><Link to="#/">Download Success</Link>
                                    <Link to="#/">Download Failed List</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>D1001</td>
                                    <td>05/10/2024 05:35:02</td>
                                    <td>Arc Super Admin</td>
                                    <td>afrar@fairbay.lk</td>
                                    <td>Price and Stocks</td>
                                    <td>60 Success/ 5 Fail/ 65 Total</td>
                                    <td><Link to="#/">Download Success</Link>
                                    <Link to="#/">Download Failed List</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>D1001</td>
                                    <td>05/10/2024 05:35:02</td>
                                    <td>Arc Super Admin</td>
                                    <td>afrar@fairbay.lk</td>
                                    <td>Weight</td>
                                    <td>60 Success/ 5 Fail/ 65 Total</td>
                                    <td><Link to="#/">Download Success</Link>
                                    <Link to="#/">Download Failed List</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUploadFiles
