import './App.css';
import TaskListComponent from './component/container/task_list';
import RegisterFormik from './component/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      <TaskListComponent />
      <RegisterFormik />
    </div>
  );
}

export default App;
