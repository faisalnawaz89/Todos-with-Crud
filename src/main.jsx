
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
// import TodoApp from '././TestFile/TodoApp'
// import TodoList from './TestFile/TodoList'
import Todos from './TestFile/Todos'
import NewTodo from './TestFile/NewTodo'
import TodoTest from './TestFile/TodoTest'
// import Crud from './TestFile/Crud'
// import HambergerMenu from './TestFile/HambergerMenu'
// import Accordion from './TestFile/Accordion'
// import TabMenu from './TestFile/TabMenu'
// import Page from './Page'
// import App from './App.jsx'
// import ChangeColor from './changeColor.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Counter />  */}
    {/* <ChangeColor /> */}
    {/* <Page /> */}
    {/* <Accordion /> */}
    {/* <TabMenu/> */}
    {/* <HambergerMenu/> */}
    {/* <TodoApp /> */}
    {/* <TodoList/> */}
    {/* <Todos/> */}
    {/* <NewTodo/> */}
    {/* <Crud/> */}
    <TodoTest/>
    
  </React.StrictMode>,
)
