import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    const { productId } = useParams(); 

    useEffect(() => {
        fetch(`${api_url}/${productId}`) 
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);  // Add productId as a dependency to ensure the effect runs when it changes

    return (
        <>
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
                <h5 className="card-title" style={{ fontSize: "1.25rem", marginBottom: "0.5rem"  }}>
                    {product.title}
                </h5>
                <p className="card-text" style={{textAlign:"center" ,  fontFamily:"Arial, Helvetica, sans-serif" ,fontSize: "0.875rem", marginBottom: "0.5rem" , height:"100%" }}>
                    {product.description}
                </p>
                <p className="card-text" style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "1rem" }}>
                    <strong>Price: ${product.price}</strong>
                </p>
                <a href='/#' className="btn btn-primary mt-auto">Close</a>
            </div>
        </div>
        </>
    );
}

export default ProductDetails;
