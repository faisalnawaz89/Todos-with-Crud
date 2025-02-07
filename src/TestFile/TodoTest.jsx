import React from 'react'
import 'boxicons'

const TodoTest = () => {

  //Declared the todo state
  const [todo, setTodo] = React.useState(()=>{
    //save todo item on localstorage
    const saveTodo = localStorage.getItem('todo')
    return saveTodo ? JSON.parse(saveTodo) : []
  })
  const [error, setError] = React.useState('')
 
  //Edit todo item
  const [editIndex, setEditIndex] = React.useState(null)
  const [currentValue, setCurrentValue] = React.useState('')
 
  //Handle form submithandler
  const submitHandler = (e) => {
    e.preventDefault()

    //Check duplicate entry of todo item
    const isDuplicate = todo.some((item)=> item.todoList.toLowerCase() === currentValue.toLocaleLowerCase())
    
    if(!isDuplicate){
       
        if(currentValue === ''){
            setError('Please add your todo!')
            setTimeout(()=>{
                setError('')
            },2000)
        }else{
           if(editIndex !== null){
            const updatedTodos = [...todo]
            updatedTodos[editIndex].todoList = currentValue
            setTodo(updatedTodos)
            setEditIndex(null)
            setCurrentValue('')
           }else{
            const getTodo = [{todoList: currentValue, status:false},...todo]
            setTodo(getTodo)
            setCurrentValue('')
           }
        }
        setCurrentValue('')

    }else{
        setError('This Todo already exist!')
        setTimeout(()=>{
            setError('')
        },2000)
        setCurrentValue('')
    }
 
  }

  //remove todoitem
  const removeTodoItem = (index) => {
    const removeItem = todo.filter((_, i)=> i !== index)
    setTodo(removeItem)
  }

  //cehck todo status
  const checkTodoStatus = (index) => {
    const checkedTodo = [...todo]
    checkedTodo[index].status = !checkedTodo[index].status
    setTodo(checkedTodo)
  }

  //Edit Todo
  const editTodoIndex = (index) => {
    setEditIndex(index)
    setCurrentValue(todo[index].todoList)
  }

  //save todo item on localstorage to set item with useEffect
  React.useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todo))
  },[todo])


  return (
    <div>
        <div className='bg-slate-200 w-full min-h-screen flex flex-col'>
            <div className='lg:w-[50%] sm:w-[70%] w-[95%] m-auto'>
            <div className='max-h-min bg-white rounded-md shadow-md py-4 px-4'>
                <h2 className='text-xl text-left font-semibold'>Todo List</h2>
                <div className='mt-3'>
                    <form  onSubmit={submitHandler}>
                        <div className={`flex items-center rounded-full overflow-hidden w-full border-2 px-1 py-1 transition-all ease-in ${`${error.length > 0 ? 'border-red-500' : 'border-gray-500/30'}`}`}>
                            <input 
                            className='w-full px-4 outline-none font-semibold'
                            value={currentValue}
                            onChange={(e)=>setCurrentValue(e.target.value)}
                            name="todolist"
                            type="text" placeholder='Enter your todo...' />
                            <button className='bg-red-500 border-2 border-red-500 hover:bg-red-700 transition-all ease-in text-white leading-4 rounded-full font-semibold p-2 flex items-center justify-center'>
                            {editIndex !== null ? 
                            <box-icon type='solid' color='white' name='edit-alt'></box-icon> 
                            : 
                            <box-icon color='white' name='plus'></box-icon> } 
                            {todo.length > 0 ? <span className='flex items-center justify-center bg-white text-red-500 aspect-square px-2 py-1 rounded-full text-md shadow-lg'>{todo.length}</span> : ''}</button>
                        </div>
                        <div className='h-4'>
                        <span className='text-red-500 text-xs ml-5 mb-2 transition-opacity ease-in'>{error}</span>
                        </div>
                    </form>
                </div>
                {todo.length > 0 ? todo.map((item, index)=>(
                    <div key={index} className='flex items-center justify-between bg-slate-50 rounded-full border-1 shadow-sm px-2 py-2 mt-2'>
                        <div className="flex items-center justify-between ml-3">
                            <input 
                            checked={item.status}
                            onChange={()=>checkTodoStatus(index)}
                            type="checkbox" className="mr-2" />
                            <h3 
                            onClick={()=>checkTodoStatus(index)}
                            className={`cursor-pointer font-semibold sm:text-md text-sm ${item.status ? 'line-through text-gray-500' : 'text-gray-800 '}`}> {item.todoList} </h3>
                        </div>
                        <div className='flex items-center justify-center gap-2 bg-gray-500/70 border-1 border-white leading-3 rounded-full px-3 py-1'>

                            <button onClick={()=>editTodoIndex(index)}>
                                <box-icon type='solid' name='edit' color='white'></box-icon>
                            </button>

                            <button onClick={()=>removeTodoItem(index)}><box-icon type='solid' name='trash' color='white'></box-icon></button>

                        </div>
                    </div>
                )): 
                
                <div className='cursor-not-allowed opacity-30 flex items-center justify-between bg-slate-50 rounded-full border-1 shadow-sm px-2 py-2 mt-2'>
                    <div className="flex items-center justify-between ml-3">
                        <input 
                        disabled
                        type="checkbox" className="mr-2" />
                        <h3 className={`cursor-not-allowed font-semibold sm:text-md text-sm text-gray-800`}> Your Todo List...</h3>
                    </div>
                    <div className='cursor-not-allowed flex items-center justify-center gap-2 bg-gray-500/90 border-1 border-white leading-3 rounded-full px-3 py-1'>
                        <button className='cursor-not-allowed'><box-icon type='solid' name='edit' color='white'></box-icon></button>
                        <button className='cursor-not-allowed'><box-icon type='solid' name='trash' color='white'></box-icon></button>
                    </div>
                </div>
                }
            </div>
            <h3 className='text-sm text-gray-500 font-medium mt-1'>*App Dedicated to Anjali Nawaz <small className='font-mono text-gray-400'>v.1 </small></h3>
        </div>

        </div>
    </div>
  )
}

export default TodoTest