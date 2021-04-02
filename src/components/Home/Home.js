import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        fetch('https://apricot-shortcake-27627.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div style={{textAlign:'center', height:'100%', width:'100%', backgroundColor:'powderblue'}}>
            <Navbar/>
            <div className="container ">
                <div className="row ">
                {
                    products.length === 0 &&
                        <div className="mt-5">
                        <div class="d-flex justify-content-center mt-5">
                        <div style={{ height: '40px', width: "40px" }} class="spinner-border" role="status">
                        </div>
                        </div>
                        </div>
                }
                    <div className="col-md">
                        {
                            products.map(product => <Product product={product} ></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;