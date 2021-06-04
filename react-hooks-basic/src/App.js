import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const[todoList,setTodoList]=useState([
    {id :1,title:'Happy Happy'},
    {id :2,title:'Happy To You'},
    {id :3,title:'Happy Night'},
  ] );



  function handleTodoClick(todo){
    console.log(todo);
    const index=todoList.findIndex(x=>x.id==todo.id)
    if(index<0)return;
    
    const newTodoList=[...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues){
    console.log('Form submit:',formValues)

    const newTodo={
      id:todoList.length+1,
      ...formValues,
    }
    const newTodoList=[...todoList]
    newTodoList.push(newTodo);
    setTodoList(newTodoList);


  }

  return (
    <div className="app">
      <h1>React hooks -PostList </h1>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
    <h1>React hooks -TodoList </h1>
    <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}
export default App;
