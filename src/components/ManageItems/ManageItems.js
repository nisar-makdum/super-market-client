import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';



const ManageItems = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('https://apricot-shortcake-27627.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    return (
        <div style={{ height:'1450px', width:'100%', backgroundColor:'powderblue'}}>
            <div class="ms-5">
                <nav className="d-flex navbar navbar-expand-lg">
                    <div style={{ marginTop: '30px' }} className="container-fluid">
                        <h3 className="text-secondary fw-bolder">Super Market</h3>
                        <div className="d-flex flex-row-reverse" id="navbarNav">
                            <ul className="navbar-nav justify-content-end ms-5">
                                <li style={{marginLeft: '50px', fontWeight: 'bold'}} className="nav-item pt-2 text-dark ">
                                    <Link style={{ textDecoration: 'none' }} className="text-secondary" to="/home">Home</Link>
                                </li>
                                <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                    <Link style={{textDecoration: 'none'}} className="text-secondary" to="/admin">Add Product</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div>
                <h1 className="text-center"> Available Products: {products.length}</h1>
                {
                    products.map(pd => <ItemDetails pd={pd}></ItemDetails>)
                }
            </div>

        </div>
    );
};

export default ManageItems;