import React, { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    const [manageId, setManageId] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleDelete = (id) => {

        console.log(id)
        fetch(`http://localhost:5000/delete-parts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = products.filter(parts => parts._id !== id)
                setProducts(remaining)
            })
    }
    return (
        <div>
            <h1>Manage Products : {products.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Desccription</th>
                            <th>Min Order</th>
                            <th>Available</th>
                            <th>Price</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => <tr>
                            <th><div class="avatar">
                                <div class="w-12">
                                    <img src={product.img} />
                                </div>
                            </div></th>
                            <td>{product.name}</td>
                            <td>{product.desc}</td>
                            <td>{product.minOrder}</td>
                            <td>{product.available}</td>
                            <td>${product.price}/unit</td>
                            <td>
                                <label for="deleteParts" onClick={() => setManageId(product._id)} className='btn btn-xs btn-error'>Delete</label>
                            </td>
                        </tr>)}


                        {
                            manageId && <DeleteModal manageId={manageId}
                                handleDelete={handleDelete}
                            ></DeleteModal>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;