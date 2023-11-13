import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Display from './components/Display'
import Buttons from './components/Buttons'

const App = () => {
  const [result, setResult] = useState({
    operacion: '',
    resultado: ''
  })

  const handleClick = (e) =>{
    if (result.operacion.length >= 18 ) return
    if (e.target.name === '+/-' && result.operacion === '') return
    
    if (result.operacion === 'Error'){
      setResult({...result, operacion: e.target.name})
    }else if (result.resultado !== '' && result.operacion === ''){
      setResult({...result, operacion: `${result.resultado}`+ e.target.name} )
    }else if (e.target.name === '+/-' && result.operacion !== '' ) {
      if(result.operacion.slice(0,1) === '-'){
        setResult({...result, operacion: `${result.operacion.slice(1, result.operacion.length)}`})
      }else{
        setResult({...result, operacion: `-${result.operacion}`})
      }
    }else{
      setResult({...result, operacion: `${result.operacion}`+ e.target.name} )
    }
    
  }

  const clear = (e) =>{
    setResult({
      operacion: '',
      resultado: ''
    })
  }

  const deleteKey = () =>{
    setResult({...result, operacion: result.operacion.slice(0, result.operacion.length -1)})
  }

  const calculate = () =>{
    try {
      const resultado  = eval(result.operacion)
      setResult({...result, resultado: resultado, operacion: ''})
    }catch{
      setResult({...result, operacion: "Error"})
    }
    
  }

  return (
    <div className="container">
      <h2><i className="fa fa-calculator" style={{fontSize:16}}></i> Estándar</h2>
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
