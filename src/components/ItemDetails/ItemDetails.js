import React from 'react';

const ItemDetails = (props) => {
    const { _id, name, price, weight } = props.pd

    const handleDelete = (id) => {
        fetch(`https://apricot-shortcake-27627.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
        })
    }
    return (
        <div className="m-5  d-flex justify-content-center" >
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Product: {name}</li>
                    <li class="list-group-item">Price: {price + '$'}</li>
                    <li class="list-group-item">Quantity: {weight + 'Kg'}</li>
                    <li onClick={() => handleDelete(_id)} class="btn btn-secondary"> Delete Product</li>
                </ul>               
        </div >
    );
};

export default ItemDetails;