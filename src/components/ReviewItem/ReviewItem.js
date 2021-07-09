import React from 'react';

const ReviewItem = (props) => {
    const{name,quantity,key,price} = props.product;
     const reviewItemStyle={  
         borderBottom:'1px solid lightgrey',
         marginBottom:'5px',
         paddingBottom:'10px',
         marginLeft:'100px'
     }
    return (
        <div style={reviewItemStyle}>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity : {quantity}</p>
            <p><small>${price}</small></p>
            <br />
            <button onClick={()=>props.handleRemoveProduct(key)} className='main-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;