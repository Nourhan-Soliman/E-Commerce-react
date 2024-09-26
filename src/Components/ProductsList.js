import React, { useEffect, useState } from 'react';
// import Products from '../Components/Products';
import Products from '../Components/Prouducts'; // Check this path and file name

function ProductsList() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }

    const getCategories = () => {
        fetch(`${api_url}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }

    const getProductsInCate = (catName) => {
        fetch(`${api_url}/category/${catName}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    return (
        <>
            <h2 className='text-center mt-5'>Our Products</h2>
            <div className='container'>
                <div className='button-container mb-4'>
                    <button 
                        onClick={() => getProducts()} 
                        className="btn" 
                        style={{ backgroundColor: "#e8054c", margin: "5px" }}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button 
                            key={cat} 
                            onClick={() => getProductsInCate(cat)} 
                            className="btn" 
                            style={{ backgroundColor: "#e8054c", margin: "5px" }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className='row g-4 justify-content-center'> 
                    {products.map((product) => (
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4' key={product.id}>
                            <Products product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductsList;
