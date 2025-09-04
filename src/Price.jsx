import React from 'react';

function Price ({ amount })
{
    return <p className="price">${amount.toFixed(2)}</p>;
}
export default Price;