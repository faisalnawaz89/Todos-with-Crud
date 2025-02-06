import React, { useEffect, useState } from 'react'

const Todos = () => {

  const [todo, setTodo] = useState(()=>{
    const saveTodo = localStorage.getItem('todo')
    return saveTodo ? JSON.parse(saveTodo) : []
  })

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const getTodo= e.target.todoItem.value
    if(getTodo  === ''){
        alert('Please enter your todo item!')
    }else{
        const addTodo = [...todo,{item: getTodo, status: false}]
        setTodo(addTodo.reverse())
        e.target.todoItem.value = ''
    }
  }

  const removeTodo = (index) => {
    const rt = todo.filter((_,i)=> i !== index)
    setTodo(rt)
  }

  const todoStatus = (index) => {
    const newTodo = [...todo]
    newTodo[index].status = !newTodo[index].status
    setTodo(newTodo)
  }

  useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todo))
  },[todo])


  return (
    <div className='w-[50%] m-auto mt-5'>
        <h1 className='text-3xl font-semibold'>Todo</h1>
        <div>
            <form onSubmit={onSubmitHandler} className='flex mt-3'>
                <input name="todoItem" className="w-full border-1 border-gray-600 py-2 px-3" type="text" placeholder='Enter todo item...' />
                <button className='bg-black text-center text-white py-2 border-1 border-black px-3'>ADD</button>
            </form>
            <div>
            {todo.map((item, index)=> (
                <div key={index} className='flex items-center justify-between bg-slate-100 py-2 px-2 mt-2'>
                    <div onClick={()=>todoStatus(index)} className={`${item.status ? 'text-gray-500' : 'text-gray-900'} cursor-pointer`}>{item.item}</div>
                    <div className='flex items-center justify-between gap-1'>
                        <div className='bg-slate-500 px-2 py-1 text-white text-[10px] hover:bg-red-400 transition-all ease-in cursor-pointer'>&#9998;</div>
                        <div onClick={()=>removeTodo(index)} className='bg-slate-500 px-2 py-1 text-white text-[10px] hover:bg-red-400 transition-all ease-in cursor-pointer'>&#x274c;</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Todos