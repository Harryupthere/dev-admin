import React from 'react'
// import './insightproducts.scss'
import { images } from '../../../utils/customFn'
import { IconEditInput, TranshIcon } from '../../../icons/icons';
import './alluser.scss'
import UserFilter from '../userfilter';
import { Link } from 'react-router-dom';
import CustomPagination from '../../layout/paginations';
import { useCustomePagination } from '../..';

const tabledata = {
    tr: [
        {
            userId: 1000,
            name: 'Arc Super Admin',
            email: 'afrar@fairbay.lk',
            role: 'Admin',
        },
        {
            userId: 1001,
            name: 'John Doe',
            email: 'john@doe.com',
            role: 'User',

        },
        {
            userId: 1001,
            name: 'John Doe',
            email: 'john@doe.com',
            role: 'User',

        },
        {
            userId: 1001,
            name: 'John Doe',
            email: 'john@doe.com',
            role: 'User',

        },
    ],
};
const AllUsers = () => {
    const {
        paginatedData,
        page,
        rowsPerPage,
        rowsPerPageOptions,
        handlePageChange,
        handleRowsPerPageChange,
        totalItems,
    } = useCustomePagination(tabledata.tr);
    return (
        <div className='insight-detail-list alluserfiter'>
            <UserFilter />
            <div className="data-table-wrapped">
                <div className="data-table-container">

                    <table>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Email</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Password Reset</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.userId}</td>
                                    <td>
                                        <div className='profile'>
                                            <div className='profile-pic'>
                                                <img src={images['profile1.svg']} alt='profile' />
                                            </div>
                                            {user.name}
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <div className='green-switch'>
                                            <input type='checkbox' />
                                        </div>
                                    </td>
                                    <td>
                                        <button type='button' className='blue_button'>
                                            Send Link
                                        </button>
                                    </td>
                                    <td>
                                        <div className='actions'>
                                            <Link to='/users/edit-user' className='blue_button edit'>
                                                Edit <IconEditInput />
                                            </Link>
                                            <button type='button' className='transparent delet'>
                                                <TranshIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <CustomPagination
                        totalItems={totalItems}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={rowsPerPageOptions}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default AllUsers;
