import React  ,{useState,useEffect}from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {


  const[ inputText,setinputText]=useState('');
  const [todos,setTodos]=useState([]);
  const [ status,setStatus] = useState('all');
  const [filterTodos,setFilterTodos]=useState([]); 
  useEffect(()=>{
    filterHandler();
    },[todos,status]);

  const filterHandler = ()=>{
      switch(status){
          case 'completed':
              setFilterTodos(todos.filter((todo)=>todo.completed));
              break;
          case 'uncompleted':
              setFilterTodos(todos.filter((todo)=>!todo.completed));
              break;
          default:
              setFilterTodos(todos);
      }
  };
  return (
    <div className="App">
     <header>
       <h1>To Do List</h1>
     </header>
      <Form inputText={inputText} todos= {todos} setTodos={setTodos} setinputText={setinputText} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos}  filterTodos={filterTodos} />
    </div>
  );
}

export default App;
