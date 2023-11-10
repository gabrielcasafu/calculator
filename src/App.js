import React, { useState } from 'react';
import Display from './components/Display'
import Buttons from './components/Buttons'

const App = () => {
  const [result, setResult] = useState("")

  const handleClick = (e) =>{
    setResult(result.concat(e.target.name))
  }

  const clear = (e) =>{
    setResult("")
  }

  const deleteKey = () =>{
    setResult(result.slice(0, result.length -1))
  }

  const calculate = () =>{
    setResult(eval(result).toString())
  }

  return (
    <div className="container">
      <h1>Estándar</h1>
      <Display 
        result={result}
      />
      <Buttons 
        handleClick={handleClick} 
        clear={clear} 
        deleteKey={deleteKey} 
        calculate={calculate}
      />
    </div>
  );
}

export default App;
