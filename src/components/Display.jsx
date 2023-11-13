const Display = ({result}) => {
    return (
      <div>
        <span className="operacion">{result.operacion}</span>
        <span className="resultado">{result.resultado}</span>
      </div>
    );
  }
  
  export default Display;