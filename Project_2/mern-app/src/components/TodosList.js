import React, { Component } from 'react'
import axios from 'axios'
import Todo from '../components/Todo'

export default class TodosList extends Component {
  state = {
      todos: []
    }
  

  componentDidMount(){
    axios.get('http://localhost:4000/todos')
    .then(res =>
      this.setState({
        todos: res.data.todo
      })
    )
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <Todo todos={this.state.todos} />
          </tbody>
        </table>
      </div>
    )
  }
}
