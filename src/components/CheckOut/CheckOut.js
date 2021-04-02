import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const CheckOut = () => {
    const { name } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('https://apricot-shortcake-27627.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    const pdType = products.find(pd => pd.name === name);

    const addToCart = () => {
        const newAddToCart = { ...loggedInUser, ...pdType, _id: Math.random(), orderTime: new Date() };

        fetch('https://apricot-shortcake-27627.herokuapp.com/addToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAddToCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert(' Order Placed Successfully')
                }
            })
    }

    return (
        <div style={{height:'750px', width:'100%', backgroundColor:'powderblue'}}>
            <Navbar/>
            <br/><br/>
            <div >
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fw-bolder">{name}</td>
                            <td class="ps-4 fw-bolder">{pdType && pdType.weight + 'Kg'}</td>
                            <td class="fw-bolder">{pdType && pdType.price + '$'}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={addToCart} className="btn btn-secondary"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>

        </div>
    );
};

export default CheckOut;