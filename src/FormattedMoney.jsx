import React from 'react'

function FormattedMoney({ amount, currency = 'USD' }){
    console.log('amount:', amount, 'currency:', currency);
    const formatter = new Intl.NumberFormat ('en-US',{
        style: 'currency',
        currency: currency,
    });
    return <span className="formatted-money">{formatter.format(amount)}</span>;
}
export default FormattedMoney;