import React from 'react'
import { IconEditInput, TranshIcon } from '../../../icons/icons';
import { Link } from 'react-router-dom';
import './userroles.scss'
const UserRoleTable = () => {

    return (
        <div className='user_roles alluserfiter'>
            <div className='create-role-actions'>
                <Link to="/users/create-role" className='blue_button'>Create New Role</Link>
            </div>
            <div className="data-table-wrapped">
                <div className="data-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Roles</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Manager</td>
                                <td>
                                    <div className='actions'>
                                        <Link to='/users/view-roles'  className='blue_button edit'>Edit <IconEditInput/></Link>
                                        <button type='button' className='transparent delet'> <TranshIcon/></button>
                                        <Link to='#/' className='viewlink'>View Permissions</Link>
                                    </div>
                                </td>
                            </tr> 
                            <tr>
                                <td>Marketing Manager</td>
                                <td>
                                    <div className='actions'>
                                        <Link to='/users/view-roles'  className='blue_button edit'>Edit <IconEditInput/></Link>
                                        <button type='button' className='transparent delet'> <TranshIcon/></button>
                                        <Link to='#/' className='viewlink'>View Permissions</Link>
                                    </div>
                                </td>
                            </tr>   
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserRoleTable;
