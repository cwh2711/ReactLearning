import React,{ useState } from 'react';

function FruitPicker(){
    const [selectedFruit,setSelectFruit] = useState('');
    const handleFruitClick = (fruit) =>{
        setSelectFruit(fruit);
    };
return(
    <div>
        <h2>pick one fruit</h2>
        <button onClick={()=>handleFruitClick('Apple')}>Apple</button>
        <button onClick={()=>handleFruitClick('Banana')}>Banana</button>
        <button onClick={()=>handleFruitClick('Grape')}>Grape</button>
        <button onClick={()=>handleFruitClick('Guava')}>Guava</button>
        <p>you select:{selectedFruit}</p>
    </div>
);
}
export default FruitPicker;
