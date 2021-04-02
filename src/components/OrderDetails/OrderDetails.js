import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const OrderDetails = () => {
    const [boughtProducts, setBoughtProducts] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://apricot-shortcake-27627.herokuapp.com/cart?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBoughtProducts(data))
    }, [])

    return (
        <div className="mt-2 text-center">
            <div>
                <h1 className="text-secondary fw-bolder">You have {boughtProducts.length} Orders</h1><br/>
            </div>

            <div style={{marginLeft:'550px'}} className="mt-3">
            {
                boughtProducts.map(bought => <ul className="list-group list-group-horizontal"><li className=" list-group-item">Product Name: {bought.name} <span className="text-danger">; </span>  Product Price :$ {bought.price}</li></ul>)
            }
            </div>
            
        </div>
    );
};

export default OrderDetails;