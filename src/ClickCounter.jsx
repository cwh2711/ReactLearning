import { useState } from 'react'
import './App.css';
import styles from './Button.module.css'
function ClickCounter(){
  const [count, setCount] = useState(0);

  const handleClick = () =>{
  setCount(count + 1);
  }
    return (
  <div className = "ClickCounter">
  <button className={styles.GreenButton} onClick ={handleClick}>
    Click!
  </button>
  <p>你已經點擊{count}次</p>
  </div>
  );
};
export default ClickCounter;