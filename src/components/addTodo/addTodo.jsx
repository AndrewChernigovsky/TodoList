import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { Row, Col, Button, FormControl } from 'react-bootstrap';

function AddTodo ({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo () {
        if(value) {
            setTodo(
                [...todo, {
                    id: uuidv4(),
                    title: value,
                    status: true
                }]
            )
            setValue('')
        } 
    }

    return (
        <Row>
            <Col className="addTodo">
                <FormControl placeholder="add your task" value={value} onChange={(e)=> setValue(e.target.value)}/>
                <Button onClick={saveTodo} className="btn">Save</Button>
            </Col>
        </Row>
    )
}

export default AddTodo