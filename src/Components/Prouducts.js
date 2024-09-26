import React from 'react';
import { Link } from "react-router-dom";

function Products(props) {
    const { product } = props;

    return (
        <div className="card text-center" style={{ width: "18rem", height: "100%" }}>
            <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.title} 
                style={{ 
                    height: "200px", 
                    width: "100%" 
                }} 
            />
            <div className="card-body d-flex flex-column" style={{ height: "100%" }}>
                <p className="card-text" style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "1rem" }}>
                    <strong>Price: ${product.price}</strong>
                </p>
                <Link to={`/product/${product.id}`} className="btn  mt-auto" style={{backgroundColor:"#e8054c"}}>
                    Show Details
                </Link>
            </div>
        </div>
    );
}

export default Products;
