import './App.css'
import { useState } from 'react';
import Menu from './componentes/Menu/Menu';
import Formulario from './componentes/Paizao/Formulario';
import Receba from './componentes/Time/Receba';
import Banner from './componentes/banner/banner';

function App() {
  
  const times = [
    {
      
      corLinha: '#606060',
      corFundo: 'black'
  }
]

  const [publis, setPublis] = useState([])

  const aoNovaPubliAdicionado = (publi) => {
    console.log(publi)
    setPublis([...publis, publi])
  }
  return (
    <div className="App">
      <Banner/>
      <Menu/>
      <Formulario times={times.map(time => time.texto)} 
      aoPubliCadastrado={publi => aoNovaPubliAdicionado(publi) }/>
      
      {times.map(time =><Receba key={time.texto} 
      texto={time.texto} corBorda={time.corLinha} corFundo={time.corFundo}
      publis={publis.filter(publi => publi.time === time.texto)}/>)}
      
    </div>
    
  );
}

export default App;