import React from 'react';

const DeleteOrdersModal = ({ orderId, handleDelete }) => {
    console.log(orderId)

    return (
        <div>
            <input type="checkbox" id="deleteOrder" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="deleteOrder" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1>Are you sure?</h1>
                    <div className='modal-action'>
                        <label className='btn btn-error' for='deleteOrder' onClick={() => handleDelete(orderId)}>Yes</label>
                        <label className='btn btn-success' for='deleteOrder' >No</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DeleteOrdersModal;