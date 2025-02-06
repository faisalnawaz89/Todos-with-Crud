import React from 'react'
import 'boxicons'

const TodoTest = () => {

  //Declared the todo state
  const [todo, setTodo] = React.useState(()=>{
    //save todo item on localstorage
    const saveTodo = localStorage.getItem('todo')
    return saveTodo ? JSON.parse(saveTodo) : []
  })
  const [error, setError] = React.useState(false)

  //Edit todo item
  const [editIndex, setEditIndex] = React.useState(null)
  const [currentValue, setCurrentValue] = React.useState('')
 
  //Handle form submithandler
  const submitHandler = (e) => {
    e.preventDefault()
    const addTodo = e.target.todolist.value
    if(addTodo === ''){
        setError(true)
        setTimeout(()=>{
            setError(false)
        },2000)
    }else{
       if(editIndex !== null){
        const updatedTodos = [...todo]
        updatedTodos[editIndex].todoList = currentValue
        setTodo(updatedTodos)
        setEditIndex(null)
        setCurrentValue('')
       }else{
        const getTodo = [{todoList: addTodo, status:false},...todo]
        setTodo(getTodo)
        e.target.todolist.value = ''
       }
    }
    setCurrentValue('')
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
            <div className='sm:w-[50%] w-[80%] m-auto max-h-min bg-white rounded-md shadow-md py-4 px-4'>
                <h2 className='text-xl text-left font-semibold'>Todo List</h2>
                <div className='mt-3'>
                    <form  onSubmit={submitHandler}>
                        <div className={`flex items-center rounded-full overflow-hidden w-full border-2 px-1 py-1 ${`${error ? 'border-red-500' : 'border-gray-500/30'}`}`}>
                            <input 
                            className='w-full px-4 outline-none font-semibold'
                            value={currentValue}
                            onChange={(e)=>setCurrentValue(e.target.value)}
                            name="todolist"
                            type="text" placeholder='Enter your todo...' />
                            <button className='bg-red-500 border-2 border-red-500 hover:bg-red-700 transition-all ease-in text-white leading-4 rounded-full font-semibold p-2'><box-icon color='white' name='plus'></box-icon></button>
                        </div>
                        <div className='h-4'>
                        {error ? <span className='text-red-500 text-xs ml-5 mb-2'>Please add todo item here</span> : ''}
                        </div>
                    </form>
                </div>
                {todo.length > 0 ? todo.map((item, index)=>(
                    <div key={index} className='flex items-center justify-between bg-slate-50 rounded-full shadow-sm px-2 py-2 mt-2'>
                        <div className="flex items-center justify-between ml-3">
                            <input 
                            checked={item.status}
                            onChange={()=>checkTodoStatus(index)}
                            type="checkbox" className="mr-2" />
                            <h3 
                            onClick={()=>checkTodoStatus(index)}
                            className={`cursor-pointer font-semibold ${item.status ? 'line-through text-gray-500' : 'text-gray-800'}`}> {item.todoList} </h3>
                        </div>
                        <div className='flex items-center justify-center gap-3 bg-gray-500/30 leading-3 rounded-full px-3 py-1'>

                            <button onClick={()=>editTodoIndex(index)}>
                                <box-icon type='solid' name='edit' color='white'></box-icon>
                            </button>

                            <button onClick={()=>removeTodoItem(index)}><box-icon type='solid' name='trash' color='white'></box-icon></button>

                        </div>
                    </div>
                )): <h3 className='mt-2 text-xs text-gray-500 text-center'>No, todo item are found!</h3>}
                
            </div>
        </div>
    </div>
  )
}

export default TodoTest