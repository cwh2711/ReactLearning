import React from "react";
import Product from './Product';

function ProductList({products})
{
    return(
        <div className="product-list">
            {products.map(product =>(
                <Product
                key={product.id}
                name={product.name}
                price={product.price}
                currency={product.currency}
                releaseDate={product.releaseDate}
                />
            ))}
        </div>
    );
}

export default ProductList;