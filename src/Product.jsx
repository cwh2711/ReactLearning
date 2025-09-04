import React from 'react';
import Price from './Price';
import FormattedMoney from './FormattedMoney';
import FormattedDate from './FormattedDate';
function Product ({ name,price,currency,releaseDate})
{
    return(
        <div className="Product">
            <h2> {name}</h2>
            <FormattedMoney amount ={price} currency={currency} />
            <p>發布日期:<FormattedDate date={releaseDate} /></p>
        </div>
    );
}

export default Product;