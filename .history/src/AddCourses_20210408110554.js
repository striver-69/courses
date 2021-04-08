import React, { Component } from 'react'

export class AddCourses extends Component {
  constructor(props)
  {
    super(props)
    this.state={name:''}
  }

  

  render() {
    const handleClick=()=>{
      this.props.handleSave(Math.random()*1000+100,this.state.name)
    }

    return (
      <div>
        <button onClick={handleClick}>Add Course</button>
        <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
      </div>
    )
  }
}

export default AddCourses
