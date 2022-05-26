import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AddAdminRow from './AddAdminRow';

const AddAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AddAdminRow
                                key={user._id}
                                refetch={refetch}
                                index={index}
                                user={user}
                            ></AddAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddAdmin;