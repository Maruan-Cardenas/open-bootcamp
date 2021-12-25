import './App.css';
import Clockjsx from './component/Clock';
import Clockjs from './component/Clockjs';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clockjs />
        <Clockjsx />
      </header>
    </div>
  );
}

export default App;
