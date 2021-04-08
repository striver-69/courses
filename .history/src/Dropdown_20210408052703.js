import React, { Component } from 'react'

let courses=[
  {id:1,name:'Aerfreg'},{id:2,name:'Aerfreg'},{id:3,name:'Aerfreg'},{id:4,name:'Aerfreg'},{id:5,name:'Aerfreg'},{id:6,name:'Aerfreg'},{id:7,name:'Aerfreg'},{id:8,name:'Aerfreg'},{id:9,name:'Aerfreg'},{id:10,name:'Aerfreg'},{id:11,name:'Aerfreg'},{id:12,name:'Aerfreg'},
]

export class Dropdown extends Component {
  constructor(props)
  {
    super(props)
    this.state={count:10,courses:[]}
  }

  componentDidMount(){
    this.setState({
      courses:courses
    })
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
        {
          this.state.courses.map((course)=>{
            return <li key={course.id}>{course.name}</li>
          })
        }
      </div>
    )
  }
}

export default Dropdown
