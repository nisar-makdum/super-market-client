import React from 'react';
import Navbar from '../Navbar/Navbar';
import OrderDetails from '../OrderDetails/OrderDetails';


const Orders = () => {
    return (
        <div  style={{textAlign:'center', height:'800px', width:'100%', backgroundColor:'powderblue'}}>
            <Navbar/>
            <h1 className="text-secondary fw-bolder">Order Details</h1>
            <OrderDetails/>
        </div>
    );
};

export default Orders;
