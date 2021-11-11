import "./css/main.css";
import './App.css';
import DisplayTodos from './component/DisplayTodos';
import Todos  from './component/Todos';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
