import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
  state={
    text: ''
  }

  handleSubmit =(e)=>{
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  handleChange=(event)=>{
    this.setState({text: event.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <p>
            <label> Add Todo</label>
            <input type="text" onChange={(event)=>this.handleChange(event)}  value={this.state.text}/>
          </p>
          <p>
            <input type="submit"/>
          </p>
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps =(dispatch) =>{
  return {
    addTodo: data=>dispatch({type: "ADD_TODO", payload: data})
  }
}

export default connect(null,mapDispatchToProps)(CreateTodo);
