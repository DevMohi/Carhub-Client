import React, { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    const [manageId, setManageId] = useState(null)
    useEffect(() => {
        fetch('https://mighty-bayou-71597.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleDelete = (id) => {

        console.log(id)
        fetch(`https://mighty-bayou-71597.herokuapp.com/delete-parts/${id}`, {
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
        <div className='mb-20'>
            <h1>Manage Products : {products.length}</h1>

            <Table className="table w-full overflow-x-auto">

                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Name</Th>
                        <Th>Desccription</Th>
                        <Th>Min Order</Th>
                        <Th>Available</Th>
                        <Th>Price</Th>
                        <Th>Manage</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {products.map((product, index) => <Tr>
                        <Th><div class="avatar">
                            <div class="w-12">
                                <img src={product.img} />
                            </div>
                        </div></Th>
                        <Td>{product.name}</Td>
                        <Td>{product.desc.slice(0, 40).concat("...")}</Td>
                        <Td>{product.minOrder}</Td>
                        <Td>{product.available}</Td>
                        <Td>${product.price}/unit</Td>
                        <Td>
                            <label for="deleteParts" onClick={() => setManageId(product._id)} className='btn btn-xs btn-error'>Delete</label>
                        </Td>
                    </Tr>)}


                    {
                        manageId && <DeleteModal manageId={manageId}
                            handleDelete={handleDelete}
                        ></DeleteModal>
                    }
                </Tbody>
            </Table>
        </div>

    )
};

export default ManageProduct;