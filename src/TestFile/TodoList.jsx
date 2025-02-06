import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState(() => {
    const saveTodo = localStorage.getItem('todo');
    return saveTodo ? JSON.parse(saveTodo) : [];
  });

  const [done, setDone] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [currentValue, setCurrentValue] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const getTodo = e.target.todoItem.value;
    if (getTodo === '') {
      alert('Please add your todo list first');
    } else {
      if (editIndex !== null) {
        todo[editIndex].item = currentValue
        setTodo(todo);
        setEditIndex(null); // Reset edit state
        setCurrentValue(''); // Clear input field
      } else {
        // Add new todo
        const addTodo = [...todo, { item: getTodo, task: false }];
        setTodo(addTodo.reverse());
        e.target.todoItem.value = '';
      }
    }
  };

  const removeTodo = (index) => {
    const rt = todo.filter((_, i) => i !== index);
    setTodo(rt);
  };

  const taskDone = (index) => {
    const newTodo = [...todo];
    newTodo[index].task = !newTodo[index].task;
    setTodo(newTodo);
  };

  const taskCompleted = () => {
    const chk = todo.filter((checkItem) => checkItem.task === true);
    setDone(chk.length);
  };

  const editTodo = (index) => {
    setEditIndex(index); // Set the index of the todo being edited
    setCurrentValue(todo[index].item); // Set the current value to the todo item
  };

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
    taskCompleted();
  }, [todo]);

  return (
    <div className="w-[50%] m-auto mt-5">
      <h1 className="text-3xl font-semibold mt-2">TODO</h1>
      <div>
        <form onSubmit={onSubmitHandler} className="flex flex-row mt-2">
          <input
            name="todoItem"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            className="border-1 border-gray-500 py-2 px-3 w-full"
            type="text"
            placeholder="Add your todo item..."
          />
          <button className="bg-slate-950 text-white font-medium px-3 hover:bg-slate-800 transition-all ease-in cursor-pointer">
            {editIndex !== null ? 'UPDATE' : 'ADD'}
          </button>
        </form>
        {todo.length > 0 ? (
          todo.map((item, index) => (
            <div key={index} className="flex items-center justify-between mt-2 bg-slate-50 py-2 px-2">
              <p
                onClick={() => taskDone(index)}
                className={`${item.task ? 'text-gray-500' : 'text-gray-800'} cursor-pointer`}
              >
                {item.item}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => editTodo(index)}
                  className="bg-red-500 text-white px-2 py-1 text-[12px] hover:bg-red-800 transition-all ease-in"
                >
                  &#9998;
                </button>
                <button
                  onClick={() => removeTodo(index)}
                  className="bg-red-500 text-white px-2 py-1 text-[10px] hover:bg-red-800 transition-all ease-in"
                >
                  &#x274c;
                </button>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center py-2 text-gray-400">No Item Found!</h4>
        )}
        {!todo.length > 0 ? (
          ''
        ) : (
          <>
            <h5 className="text-center py-2 text-gray-400">Total Todo Task: {todo.length}</h5>
            <div className="flex items-center justify-between bg-slate-500 px-2">
              <h5 className="text-center py-2 text-white text-[12px]">Task Completed: {done}</h5>
              <h5 className="text-center py-2 text-white text-[12px]">Task Incomplete: {todo.length - done}</h5>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
