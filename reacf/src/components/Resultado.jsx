import React from 'react';

const Resultado = (props) => {
  return (
    <div className='u-full-width resultado'>
        <h2>Reumen</h2>
        <p>La Cantidad solicitada es : {props.cant}</p>
        <p>El plazo solicitado es : {props.plazo}</p>
        <p>Su cargo mensual es de : {(props.total/props.plazo).toFixed(0)}</p>
        <p>El pago total es de : {props.total}</p>
    </div>
  );
};

export default Resultado;
