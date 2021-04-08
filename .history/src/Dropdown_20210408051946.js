import React, { Component } from 'react'

export class Dropdown extends Component {
  constructor(props)
  {
    super(props)
    this.state={count:1}
  }

  
  render() {
    const handleClick=()=>{
      this.setState({
        count:count+1
      })
    }
    return (
      <div>
        {this.state.count}
        <button onClick={()=>handleClick}>Add</button>
      </div>
    )
  }
}

export default Dropdown
