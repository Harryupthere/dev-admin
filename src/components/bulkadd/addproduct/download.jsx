import React from 'react'
import './addproduct.scss'
const DownloadTemplate = () => {
    return (
        <div className='download-table'>
            <div className='theme-card'>
                <div className='action_btn'>
                    <button type='button' className='orange_button'>Download Template</button>
                    <button type='button' className='orange_border_btn'>Download Category List</button>
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

export default DownloadTemplate
