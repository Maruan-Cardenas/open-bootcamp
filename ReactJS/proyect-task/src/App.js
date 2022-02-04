import TodosContainer from "./components/container/TodoContainer";
import TodoFormContainer from "./components/container/TodoFormContainer";
import FilterOption from "./components/pure/FilterOption";

function App() {
  return (
    <div className="App">
      <TodosContainer />
      <TodoFormContainer />
      <FilterOption />
    </div>
  );
}

export default App