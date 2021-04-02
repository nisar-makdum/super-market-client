import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';




const Admin = () => {
    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            image: imageURL
        }

        const url = "https://apricot-shortcake-27627.herokuapp.com/addEvent"
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side', res))
    };


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '07043f55e5da831de892f3001dff2c28');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div style={{textAlign:'center', height:'750px', width:'100%', backgroundColor:'powderblue'}}>

            <div class="ms-5">
                <nav className="d-flex navbar navbar-expand-lg">
                    <div style={{ marginTop: '30px' }} className="container-fluid">
                        <h3 className="text-secondary fw-bolder">Super Market</h3>
                        <div className="d-flex flex-row-reverse" id="navbarNav">
                            <ul className="navbar-nav justify-content-end ms-5">
                                <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                    <Link style={{ textDecoration: 'none' }} className="btn btn-secondary" to="/home">Home</Link>
                                </li>
                                <li style={{ marginLeft: '50px', fontWeight: 'bold'}} className="nav-item pt-2 fw-bold">
                                    <Link style={{ textDecoration: 'none' }} className="btn btn-secondary" to="/delete">Manage Products</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <form class="row mt-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-6">
                    <label for="name" class="form-label"><h4>Product Name</h4></label>
                    <input name="name" ref={register} class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="weight" class="form-label"><h4>Weight</h4></label>
                    <input name="weight" class="form-control" ref={register} id="inputPassword4" />
                </div>
                <div class="col-md-6 mt-3">
                    <label for="Price" class="form-label"><h4>Price</h4></label>
                    <input name="price" class="form-control" ref={register} id="inputEmail4" />
                </div>
                <div class="col-md-6 mt-3">
                    <label for="weight" class="form-label"><h4>Insert File</h4></label>
                    <input class="form-control" type="file" onChange={handleImageUpload} id="formFile" />
                </div>
                <div class="col-12 d-flex justify-content-end">
                    <button class="mt-4  btn btn-secondary btn-lg">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default Admin;