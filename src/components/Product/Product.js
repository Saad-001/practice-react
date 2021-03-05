import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4><Link to={"/product/" +key}>{name}</Link></h4>
                <p>by : {seller}</p>
                <p><b>$ {price}</b></p>
                <p><small>only {stock} left in stock - order soon</small></p>
                { props.showAddToCart ===true && <button className="main-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
            </div>
        </div>
    );
};

export default Product;