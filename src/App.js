import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Rushador',
      corPrimaria: '#FD6D31',
      corSecundaria: '#fadab9'
    },
    {
      nome: 'Suporte',
      corPrimaria: '#000000',
      corSecundaria: '#d1d1d1'
    },
    {
      nome: 'Capitão',
      corPrimaria: '#FD6D31',
      corSecundaria: '#fadab9'
    },
    {
      nome: 'Instaplayer',
      corPrimaria: '#000000',
      corSecundaria: '#d1d1d1'
    },
    {
      nome: 'Paçoqueiro',
      corPrimaria: '#FD6D31',
      corSecundaria: '#fadab9'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;
