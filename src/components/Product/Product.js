import React from 'react';
import { useHistory } from 'react-router';


const Product = (props) => {
    const {name, image, weight, price} = props.product
    const cardStyle = {
        margin: '15px',
        borderRadius: '10px',
        float: 'left',
        backgroundColor: 'white'
    }

    const history = useHistory()
    const handleBuy = (name) => {
        history.push(`/buy/${name}`);
    }

    return (
        <div style={cardStyle} className="">
        <div class="card" style={{ width: "300px", height: "420px" }}>
            <div>
                <img src={image} class="card-img-top img-thumbnail" alt="..." />
            </div>
            <div class="card-body">
                <h5>{name} - {weight}Kg</h5>
                <div className="d-flex mt-3">
                    <h3 className="text-secondary">${price}</h3>
                    <button onClick={() => handleBuy(name)} style={{ marginLeft: '90px', width: '100px'}} className="btn btn-secondary" type="button">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Product;