import React, {useState} from 'react'
import Header from './components/header/header.jsx'
import AddTodo from './components/addTodo/addTodo.jsx'
import TodoList from './components/todoList/todoList.jsx'
import { Container } from 'react-bootstrap'

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
            status: true
        }
    ])

    return (
        <Container>
            <Header />
            <AddTodo todo={todo} setTodo={setTodo} />
            <TodoList todo={todo} setTodo={setTodo} />
        </Container>
    )
}

export default App