import React, { useState } from 'react';
import styles from './Button.module.css'
function Counter() 
{
    const [count,setCount] = useState(0);

    function handleClick()
    {
        setCount(count + 1);
    }
    return(
        <div>
            <button className={styles.BlueButton} onClick={handleClick}>
                你已經點擊我{count}次了
            </button>
        </div>
    )
}
export default Counter