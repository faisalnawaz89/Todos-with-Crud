import { useEffect, useState } from "react";

export default function TodoApp() {
    const [todo, setTodo] = useState(() => {
        const savedTodo = localStorage.getItem('todos');
        return savedTodo ? JSON.parse(savedTodo) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo));
        console.log(todo);
        
    }, [todo]);

    const getTodoData = (e) => {
        e.preventDefault();
        const getAppData = e.target.todoApp.value;
        
        if(getAppData == ''){
            alert('Please add your items')
        }else{
            const showData = [...todo, { text: getAppData, completed: false }];
            setTodo(showData);
        }
        
        e.target.todoApp.value = '';
    };

    const removeTodo = (index) => {
        const removeData = todo.filter((_, i) => i !== index);
        setTodo(removeData);
    };

    const toggleTaskDone = (index) => {
        const newTodo = [...todo];
        newTodo[index].completed = !newTodo[index].completed;
        setTodo(newTodo);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="todo-app">
                            <h1>Add Todo</h1>
                            <form onSubmit={getTodoData}>
                                <div className="input-custom form-group">
                                    <input 
                                        type="text" name="todoApp" className="form-control" placeholder="Enter your list" />
                                    <button type="submit" className="custom-btn btn btn-primary">Add</button>
                                </div>
                            </form>
                            {todo.map((value, i) => (
                                <div key={i} className="appData">
                                    <div className="row align-items-center">
                                        <div 
                                            onClick={() => toggleTaskDone(i)} 
                                            className={`col-10 ${value.completed ? 'taskDone' : ''}`}>
                                            {i + 1}. {value.text}
                                        </div>
                                        <div className="col-2 tr">
                                            <button onClick={() => removeTodo(i)} className="btn btn-danger">&times;</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
