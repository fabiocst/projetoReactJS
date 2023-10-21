import logo from './logo.svg';
import './App.css';
import Frases from './components/Frases';
import Produto from './components/Produto';


function App() {
  const nome="Mário";
  //método para deixar td maiusculo
  const novo=nome.toUpperCase();
  const url="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg";

  function soma(a,b){
    return a+b;
  }
  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {nome}</p>
      <p>Soma:{soma(2,6)}</p>
      
      <img src={url} alt="Minha Imagem"/>
      <Frases/>
      <Produto
      nome="Caneca"
      foto="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
      desc="Uma paisagem bonita"
      />
    </div>
  );
}

export default App;
