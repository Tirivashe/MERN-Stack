import React, { Component } from 'react'
import axios from 'axios'

export default class CreateTodo extends Component {
  state = {
    description: "",
    responsible: "",
    priority: "",
    completed: false
  }

  onSubmit = e =>{
    e.preventDefault()

    const { description, responsible, priority, completed } = this.state;
    //i.e description for new todo = this.state.description from state in ES6 version
    const newTodo = {
      description,
      responsible,
      priority,
      completed
    }
    //for axios to post to the backend, put the url that is meant to do post req's by the backend itself
    axios.post('http://localhost:4000/todos/add', newTodo)
    .then(res => {
      console.log(res);
    })

    this.setState({
      description: "",
      responsible: "",
      priority: "",
      completed: false
    })

    
  }

  handleChangeDesc = e => {
    this.setState({
      description: e.target.value
    })
  }

  handleChangeResp = e => {
    this.setState({
      responsible: e.target.value
    })
  }

  handleChangePrio = e => {
    this.setState({
      priority: e.target.value
    })
  }

  

  render() {
    return (
      <div>
        <div style={{ marginTop: 20 }}>
          <h3>Create New Todo</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Description: </label>
              <input type="text" className="form-control" value={this.state.description} onChange={this.handleChangeDesc} />
            </div>
            <div className="form-group">
              <label>Responsible: </label>
              <input type="text" className="form-control" value={this.state.responsible} onChange={this.handleChangeResp}/>
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" name="prioOptions" id="lowPrio" value="Low" checked={this.state.priority === "Low"} onChange={this.handleChangePrio}/>
                <label className="form-check-label">Low</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" name="prioOptions" id="midPrio" value="Medium" checked={this.state.priority === "Medium"} onChange={this.handleChangePrio}/>
                <label className="form-check-label">Medium</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" name="prioOptions" id="highPrio" value="High" checked={this.state.priority === "High"} onChange={this.handleChangePrio}/>
                <label className="form-check-label">High</label>
              </div>
            </div>
            <div className="form">
              <input type="submit" value="Create Todo" className="btn btn-primary"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
