import React, { useState } from 'react';
import './App.css';

function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [status, setStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddition = () => {
    if(num1 && num2) {
      const ans = parseFloat(num1) + parseFloat(num2);
      setStatus('Success'); 
      setSuccessMessage(`Result: ${ans}`);
    }else {
      setStatus('Error');
      num1 ? setSuccessMessage('Please enter a value for num2') : setSuccessMessage('Please enter a value for num1');
    }
    setNum1('');
    setNum2('');
  }

  const handleSub = () => {
    if(num1 && num2) {
      const ans = parseFloat(num1) - parseFloat(num2);
      setStatus('Success'); 
      setSuccessMessage(`Result: ${ans}`);
    }else {
      setStatus('Error');
      num1 ? setSuccessMessage('Please enter a value for num2') : setSuccessMessage('Please enter a value for num1');
    }
    setNum1('');
    setNum2('');
  }

  const handleMul = () => {
    if(num1 && num2) {
      const ans = parseFloat(num1) * parseFloat(num2);
      setStatus('Success'); 
      setSuccessMessage(`Result: ${ans}`);
    }else {
      setStatus('Error');
      num1 ? setSuccessMessage('Please enter a value for num2') : setSuccessMessage('Please enter a value for num1');
    }
    setNum1('');
    setNum2('');
  }

  const handleDiv = () => {
    if(num1 && num2 && (num2 != '0')) {
      const ans = parseFloat(num1) / parseFloat(num2);
      setStatus('Success'); 
      setSuccessMessage(`Result: ${ans}`);
    }else {
      setStatus('Error');
      if(num2 == 0) {
        setSuccessMessage('Enter a Value other than zero');
        return;
      }
      num1 ? setSuccessMessage('Please enter a value for num2') : setSuccessMessage('Please enter a value for num1');
    }
    setNum1('');
    setNum2('');
  }

  return (
    <div className="App">
      <div className='calculator'>
      <h1>React Calculator</h1>
      <div className='inputs'>
        <input
            type='text'
            placeholder='Num 1'
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type='text'
            placeholder='Num 2'
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
      </div>
      <div className='buttons'>
        <button className='addBtn' onClick={handleAddition}>+</button>
        <button className='minusBtn' onClick={handleSub}>-</button>
        <button className='mulBtn' onClick={handleMul}>*</button>
        <button className='divBtn' onClick={handleDiv}>/</button>
      </div>

      <div className='results'>
        <div className='status'>
          <span className={status}>{status ? `${status}!` : status}</span>
        </div>
        <div className='message'>
        <span>{successMessage}</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
