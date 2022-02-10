import React, {useState} from 'react'
import Header from './components/header/header.jsx'
import AddTodo from './components/addTodo/addTodo.jsx'
import TodoList from './components/todoList/todoList.jsx'

function App() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'first todo',
            status: true
        },
        {
            id: 2,
            title: 'second todo',
            status: true
        },
        {
            id: 3,
            title: 'third todo',
            status: false
        }
    ])

    return (
        <div className='App'>
            <Header />
            <AddTodo todo={todo} setTodo={setTodo} />
            <TodoList todo={todo} setTodo={setTodo} />
        </div>
    )
}

export default App