import React, { useState } from "react";
import {CalcularTotal} from '../Helpers/Helpers.js'

const Formulario = (props) => {
     
    const {cant, setCant, plazo, setPlazo,  setLoad,setTotal}=props
    const [error,setError]= useState(false); 

    const handlePrestamo =(e)=>{
        e.preventDefault();
      
        //Validar 
        if(cant === 0 || plazo ==='') {
          setError(true);
          return;
        }
        //eliminar error
        setError(false);
        
        //habilita el spinner 
        setLoad(true)
        
        setTimeout(() => {
          
          //realizar cotizacion
          setTotal ( CalcularTotal(cant, plazo)); 
          //desactiva el spinner
          setLoad(false)
        }, 3000);
    }

    return (
    <div>
       {/*  {cant}<br/>
        {plazo} */}
      <form onSubmit={handlePrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={e=> setCant(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select 
              className="u-full-width"
              onChange={e => setPlazo(e.target.value)}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>

      {(error) ? <p className="error">Todo los campos son obligatorios </p>: null}

    </div>
  );
};

export default Formulario;