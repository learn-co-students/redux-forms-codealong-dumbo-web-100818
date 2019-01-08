import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = (e) => {
      this.setState({
        text: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.text} onChange={(e) => this.handleChange(e)} />
          </p>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: fromData => dispatch({type: "ADD_TODO", payload: fromData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
