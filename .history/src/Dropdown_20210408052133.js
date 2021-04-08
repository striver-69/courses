import React, { Component } from 'react'

export class Dropdown extends Component {
  constructor(props)
  {
    super(props)
    this.state={count:10}
  }

  
  render() {
    const handleClick=(val)=>{
      this.setState({
        count:this.state.count+val
      })
    }
    return (
      <div>
        {this.state.count}
        <button onClick={()=>handleClick(10)}>Add</button>
      </div>
    )
  }
}

export default Dropdown
