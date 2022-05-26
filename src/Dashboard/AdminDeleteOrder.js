import React from 'react';

const AdminDeleteOrder = ({ manageId, handleDelete }) => {

    return (
        <div>
            <input type="checkbox" id="deleteParts2" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="deleteParts2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1>Are you sure?</h1>
                    <div className='modal-action'>
                        <label className='btn btn-error' for='deleteParts2' onClick={() => handleDelete(manageId)} >Yes</label>
                        <label className='btn btn-success' for='deleteParts2' >No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDeleteOrder;