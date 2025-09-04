import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product';
import ProductList from './ProductList';
import Counter from './Counter';
import Greeting from './Greeting';
import PropTypes from 'prop-types';
function App() 
{
  // 宣告一個狀態 count，初始值為 0
  const [count, setCount] = useState(0);

  // 當按鈕被點擊時，count + 1
  const handleClick = () => {
    setCount(count + 1);
  }
  const products = [
{ id: 1, name: "超級小工具", price: 49.99, currency: "USD", releaseDate: "2023-06-15" },
{ id: 2, name: "萬用插座", price: 39.99, currency: "EUR", releaseDate: "2023-07-01" },
{ id: 3, name: "令人驚奇的小工具", price: 59.99, currency: "GBP", releaseDate: "2023-08-30" },
{ id: 4, name: "天才小工具", price: 89.99, currency: "GBP", releaseDate: "2025-07-06" }
];

  return (
  <div className="App">
  <h1>歡迎來到React 應用程式！</h1>
  <p>React！</p>
  <Counter></Counter>
  <Greeting person={{name:"Alice" ,age:29 ,occupation:"開發者" }}/>
  <Greeting person={{name:"Bob" ,age:35 ,occupation:"設計師"}} />
  <ProductList products={products} />
  </div>
  );
}
Greeting.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    occupation: PropTypes.string.isRequired,
  }).isRequired
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default App
