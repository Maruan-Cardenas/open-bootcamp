import './App.css';
import Father from './component/container/father';
import Asyncexample from './component/pure/AsyncExample';
import Axiosexample from './component/pure/AxiosExample';
import Fetchexample from './component/pure/FetchExample';
import LoginFormik from './component/pure/form/loginFormik';
import GreetingStyled from './component/pure/greetiingStyled';
// import ObservableExample from './component/pure/ObservableExample';
import OptionalRender from './component/pure/optionalRender';
import Example1 from './hooks/example1';
import Example2 from './hooks/example2';
import MiComponenteConContexto from './hooks/example3';
import Example4 from './hooks/example4';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Example1 />
      <Example2 />
      <MiComponenteConContexto />
      <Example4 nombre='Maruan'>
        // Todo lo que hay quí, es tratado como props.children en cualquier componente
        Contenido del props.children
      </Example4>
      <GreetingStyled name='Maruan' />
      <Father />
      <OptionalRender />
      <LoginFormik /> */}
      {/* <Asyncexample />
      <ObservableExample />
      <Fetchexample /> */}
      <Axiosexample />
      </header>
    </div>
  );
}

export default App;
