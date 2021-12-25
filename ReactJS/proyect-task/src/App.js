import './App.css';
import Example1 from './hooks/example1';
import Example2 from './hooks/example2';
import MiComponenteConContexto from './hooks/example3';
import Example4 from './hooks/example4';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Example1 />
      <Example2 />
      <MiComponenteConContexto />
      <Example4 nombre='Maruan'>
        {/* Todo lo que hay quí, es tratado como props.children en cualquier componente*/}
        Contenido del props.children
      </Example4>
      </header>
    </div>
  );
}

export default App;
