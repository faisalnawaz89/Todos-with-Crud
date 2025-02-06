import { useState } from "react"

export default function AddTodo({addnewItem}){

    const [todoName, setTodoName] = useState('')
    const [todoDate, setTodoDate] = useState('')

    const handleCLicked = () => {
        addnewItem(todoName, todoDate)
    }

    return(
        <>
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
        </>
    )
}