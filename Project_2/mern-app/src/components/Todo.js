import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'


//et randomNumber = Math.floor(Math.random()*100)

const TodoItem = props => {
    return(
        <tr>
            <td className={props.todo.completed ? 'completed' : ''}>{props.todo.description}</td>
            <td className={props.todo.completed ? 'completed' : ''}>{props.todo.responsible}</td>
            <td className={props.todo.completed ? 'completed' : ''}>{props.todo.priority}</td>
            <td>
                <Link to={"/edit/"+ props.todo._id }>Edit</Link>
            </td>
        </tr>
    )
}


export default class Todo extends Component{
    render(){
        return this.props.todos.map(todo => {
            return <TodoItem todo={todo} key={todo._id}/>
        })
    }
}