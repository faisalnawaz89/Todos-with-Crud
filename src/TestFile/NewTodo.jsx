import React, { useEffect, useState } from 'react'

const NewTodo = () => {

    //Set state for todo
    const [todo, setTodo] = useState(()=>{
        const saveTodo = localStorage.getItem('todo')
        return saveTodo ? JSON.parse(saveTodo) : []
    })

    //Edit todoList
    const [editIndex, setEditIndex] = useState(null)
    const [currentValue, setCurrentValue] = useState('')

    //Form handler
    const submitHandler = (e) => {
        e.preventDefault()
        //get todo item from input field
        const addTodo = e.target.todoItem.value
        
        //check condition for todo empty or not
        if(addTodo === ''){
            alert('please add your todo list')
        }else{
            if(editIndex !== null){
                const updateTodos = [...todo]
                updateTodos[editIndex].itemList = currentValue
                setTodo(updateTodos)
                setEditIndex(null)
                setCurrentValue('')
            }else{
                const getTodo = [{itemList: addTodo, status: false},...todo]
                setTodo(getTodo)
                e.target.todoItem.value = '';
                // console.log(getTodo);
            }
        }
        setCurrentValue('')
    }

    //remove todo item
    const removeTodo = (index) => {
        const removeItem = todo.filter((_,i)=> i !== index)
        setTodo(removeItem)
    }

    //Edit todo index value
    const editTodoIndex = (index) => {
        setEditIndex(index)
        setCurrentValue(todo[index].itemList)
    }

    //check todo status completed or not
    const checkStatus = (index) => {
        const newTodo = [...todo]
        newTodo[index].status = !newTodo[index].status
        setTodo(newTodo)
    }

    useEffect(()=>{
        localStorage.setItem('todo', JSON.stringify(todo))
    },[todo])
  
  return (

    <div className='w-full mt-5'>
        <div className='w-[50%] m-auto'>
            <h2 className='text-3xl font-semibold'>Todo List</h2>
            <div>
                <form onSubmit={submitHandler} className='flex mt-2'>
                    <input
                    value={currentValue}
                    onChange={(e)=>setCurrentValue(e.target.value)}
                    name='todoItem' className="border-2 border-gray-400 px-3 py-2 w-full" 
                    type="text" placeholder='Enter your todo...'/>
                    <button type="submit" className='bg-red-500 text-white font-semibold px-4 hover:bg-red-600 transition-all ease-in'>{editIndex !== null ? 'UPDATE' : 'ADD'}</button>
                </form>
                {/* Now Ftech the todo item */}
                {todo.length > 0 ? todo.map((list, index)=>(
                    <div key={index} className='flex items-center justify-between mt-2 bg-slate-200 py-2 px-2'>
                        <h4 onClick={()=>checkStatus(index)} className={`${list.status ? 'font-normal text-gray-500' : 'font-semibold text-gray-900'} cursor-pointer`}>{list.itemList}</h4>
                        <div className='flex gap-2'>
                            <button onClick={()=>editTodoIndex(index)} className='bg-gray-400 px-2 py-1'>&#9998;</button>
                            <button onClick={()=>removeTodo(index)} className='bg-gray-300 px-2 py-1'>&#10006;</button>
                        </div>
                    </div>
                )):<h4 className='mt-2 text-center text-gray-400'>No, Todo List Found!</h4>}
            </div>
        </div>
    </div>
  )
}

export default NewTodo