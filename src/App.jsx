import { useState } from 'react'
import './App.css';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
function App() 
{
  return (
  <div className="App">
  <h1>歡迎來到React 應用程式！</h1>
  <p>React！</p>
  <ClickCounter />
  </div>
  );
}

export default App
