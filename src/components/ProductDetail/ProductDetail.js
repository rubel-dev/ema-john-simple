import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from './../../fakeData/index';
import Product from './../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(prod=>prod.key === productKey)
    console.log(product)
    console.log(productKey)
    return (
        <div>
            <h2>Product detail is coming soon -----</h2>
            <Product showAddToCart ={false} product ={product}></Product>
        </div>
    );
};

export default ProductDetail;