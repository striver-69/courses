import React, { Component } from 'react'

export class Dropdown extends Component {
  constructor(props)
  {
    super(props)
    this.state={count:1}
  }

  handleClick=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <div>
        <button onClick={()=>handleClick}>Add</button>
      </div>
    )
  }
}

export default Dropdown
