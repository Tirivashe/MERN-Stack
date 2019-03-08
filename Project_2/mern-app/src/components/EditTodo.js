import React, { Component } from 'react'
import axios from 'axios'

export default class EditTodo extends Component {

  state = {
    description: "",
    responsible: "",
    priority: "",
    completed: false
  }

  componentDidMount(){
    axios.get("http://localhost:4000/todos/"+ this.props.match.params.id)
    .then(res => {
      const { description, priority, responsible, completed } = res.data.todo
      this.setState({
        description,
        responsible,
        priority,
        completed
      })
    })
  .catch(err => console.log(err))
  }

  handleSubmit = e => {
    e.preventDefault();
    const { description, responsible, priority, completed } = this.state
    const obj = {
      description,
      responsible,
      priority,
      completed
    }

    axios.patch("http://localhost:4000/todos/update/"+ this.props.match.params.id, obj)
    .then(res => console.log(this.props.match.params.id))

    //this allows the user to go back to the specified path
    this.props.history.push('/')
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleChangeCheckbox = () => {
    this.setState({
      completed: !this.state.completed
    })
  }

  render() {
    return (
      <div>
        <h3>Update Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input type="text" className="form-control" value={this.state.description} name="description" onChange={this.handleChange} />
            <label>Responsible: </label>
            <input type="text" className="form-control" value={this.state.responsible} name="responsible" onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" id="lowPrio" value="Low" checked={this.state.priority === "Low"} name="priority" onChange={this.handleChange}/>
                <label className="form-check-label">Low</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" id="midPrio" value="Medium" checked={this.state.priority === "Medium"} name="priority" onChange={this.handleChange}/>
                <label className="form-check-label">Medium</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" id="highPrio" value="High" checked={this.state.priority === "High"} name="priority" onChange={this.handleChange}/>
                <label className="form-check-label">High</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="completedCheckbox" name="completedCheckbox" onChange={this.handleChangeCheckbox} value={this.state.completed}/>
                <label className="form-check-label" htmlFor="completedCheckbox">Completed</label>
                <br/>
                <div className="form-group">
                  <input type="submit" value="Update Todo" className="btn btn-primary" />
                </div>
              </div>
            </div>
        </form>
      </div>
    )
  }
}
