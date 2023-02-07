import './App.css';
import AddTodoItem from './Components/AddTodoItem';
import CheckboxItem from './Components/CheckboxItem';
import DeleteList from './Components/DeleteList';
import Modal from './Components/Modal';
import TodoList from './Components/TodoList';
import { TodoProvider } from './Providers/TodoProvider';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <AddTodoItem/>
        <Modal/>
        <TodoList/>
        <CheckboxItem/>
        <DeleteList/>
      </TodoProvider>
    </div>
  );
}

export default App;
