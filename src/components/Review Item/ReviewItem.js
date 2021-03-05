import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const Style = {
        color: "blue"
    }
    const reviewItemStyle = {
        borderBottom: "1px solid lightgray",
        marginBottom: "10px",
        paddingBottom: "10px",
        marginLeft: "200px"
    }
    return (
        <div style={reviewItemStyle}>
            <h4 style={Style}>{name}</h4>
            <p>Quantity : {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button onClick={() => props.removeProduct(key)} className="main-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;