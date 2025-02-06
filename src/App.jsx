
import TodoItems from './components/TodoItems'
import AddTodo from './components/AddTodo'
import './App.css'
import { useState } from 'react'

export default function App (){
  const [todoItems, setTodoItems] = useState([]);
  const [todoName, setTodoName] = useState('')
  const [todoDate, setTodoDate] = useState('')
  //this is new file and folder stucture

  const handleCLicked = () => {
    addnewItem(todoName, todoDate)
  }

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <h1>Todo App</h1>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input 
            type="text" 
            placeholder="Enter Todo here"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input type="date" 
              value={todoDate}
              onChange={(e) => setTodoDate(e.target.value)}
              />
          </div>
          <div className="col-2">
            <button 
              type="button" 
              className="btn btn-success"
              onClick={handleCLicked}
              >Add</button>
          </div>
        </div>
      </div>
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}