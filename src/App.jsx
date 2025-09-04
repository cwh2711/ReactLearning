import { useState } from 'react'
import './App.css';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import FruitPicker from './FruitPicker';
function App() 
{
  return (
  <div className="App">
  <h1>歡迎來到React 應用程式！</h1>
  <p>React！</p>
  <ClickCounter />
  <FruitPicker />
  </div>
  );
}

export default App
