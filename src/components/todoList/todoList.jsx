import React, {useState} from 'react';
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSave, faEdit, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

function TodoList ({todo, setTodo}) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect ( () => {
        setFiltered(todo)
    }, [todo])

    function deleteTodo (id) {
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo)
    }

    function statusTodo (id) {
        let newTodo = [...todo].filter(item => {
            if(item.id == id){
                item.status = !item.status
            }

            return item
        })
        setTodo(newTodo)
    }

    function editTodo (id, title) {
      setEdit(id)
      setValue(title)
    }

    function saveTodo (id) {
        let newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    function todoFilter (status) {
        if(status === 'all') {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter( item => item.status === status)
            setFiltered(newTodo)
        }
    }

    return (
        <div>
            <Row>
                <Col className="filter">
                    <ButtonGroup aria-label="Basic example" className='btns'>
                        <Button variant="secondary" onClick={ ()=>todoFilter('all')}>All</Button>
                        <Button variant="secondary" onClick={ ()=>todoFilter(false)}>Closed</Button>
                        <Button variant="secondary" onClick={ ()=>todoFilter(true)}>Opened</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            {
                filtered.map( item => (
                    <div key={item.id} className="listItem">
                        {
                            edit == item.id ? 
                                <div>
                                    <input value={value} onChange={(e) => setValue(e.target.value)}/>
                                </div> :
                                <div className={!item.status ? 'close' : ''}>{item.title}</div>
                        }

                        {
                            edit == item.id ?
                                <div>
                                    <Button onClick={()=> saveTodo(item.id)}><FontAwesomeIcon icon={faSave}/></Button>
                                </div> :
                                <div>
                                    <Button onClick={()=> deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                                    <Button onClick={()=> statusTodo(item.id)} className="btn">
                                        {
                                            item.status ? <FontAwesomeIcon icon={faLockOpen}/> : <FontAwesomeIcon icon={faLock}/>
                                        }
                                    </Button>
                                    <Button onClick={()=> editTodo(item.id, item.title)} className="btn"><FontAwesomeIcon icon={faEdit}/></Button>
                                </div>
                        }
                    </div>   
                ))
            }
            
        </div>
    )
}

export default TodoList