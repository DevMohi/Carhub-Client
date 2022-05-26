import React from 'react';
import { toast } from 'react-toastify';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const AddAdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed To make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Sucessfully Made an admin')
                }

            })
    }
    return (
        <Tr>
            <Th>{index + 1}</Th>
            <Td>{email}</Td>
            <Td className='lg:mb-0 mb-3'>{role !== 'admin' && <button className='btn btn-xs' onClick={makeAdmin}>Make Admin</button>}</Td>

        </Tr >

    );
};

export default AddAdminRow;