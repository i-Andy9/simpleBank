import React, { useState } from 'react';
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Msj from './components/Msj';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {

  const [cant, setCant] = useState(0);
  const [plazo, setPlazo] = useState('');
  const [total, setTotal] = useState(0);
  const [load,setLoad]= useState(false);

  let components

  if(load ){
    components= <Spinner/>
  }else
  if (total === 0) {
    components = <Msj/>
  }
  else {
    components = <Resultado cant={cant} plazo={plazo} total={total} />
  }
  return (
    <div className="App">

      <Header />

      <div className='container'>
        <Formulario
          cant={cant}
          setCant={setCant}
          plazo={plazo}
          setPlazo={setPlazo}
          total={total}
          setTotal={setTotal}
          setLoad={setLoad}
        />
        <div className='mensajes'>
          {components}
        </div>
      </div>
    </div>
  );
}

export default App;
