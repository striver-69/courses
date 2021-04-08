import React, { Component } from 'react'

export class AddCourses extends Component {
  constructor(props)
  {
    super(props)
    this.state={name:''}
  }

  render() {
    return (
      <div>
        <button>Add Course</button>
        <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
      </div>
    )
  }
}

export default AddCourses
