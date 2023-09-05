import './App.css'
import {cientistas} from "./assets/data.js"
import Button from './componentes/Button';
import {getImageUrl} from './componentes/utils.jsx'

function App() {
  const listaItens = cientistas.map(cientista =>
    <li key ={cientista.id}>
      <img 
      src={getImageUrl(cientista)} 
      alt={cientista.nome}
      className="img"
      />
      <p>
        <strong>{cientista.nome}</strong> <br />
        {' ' + cientista.profissao + ' '} <br />
        conhecido por{' ' + cientista.realizacao}.
      </p>
    </li>
  );

  return (
  <>
  <ul>{listaItens}</ul>
  <Toolbar />
  <form onSubmit={ e => {
    alert("Enviado!");
  } } >
    <input />
    <button>Enviar</button>
    </form>
  </>
  );
}

export default App
