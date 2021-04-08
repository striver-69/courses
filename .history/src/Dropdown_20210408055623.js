import React, { Component } from 'react'

let courses=[
  {id:1,name:'Aerfreg'},{id:2,name:'Berfreg'},{id:3,name:'Cerfreg'},{id:4,name:'Derfreg'},{id:5,name:'Eerfreg'},{id:6,name:'Ferfreg'},{id:7,name:'Gerfreg'},{id:8,name:'Herfreg'},{id:9,name:'Ierfreg'},{id:10,name:'Jerfreg'},{id:11,name:'Kerfreg'},{id:12,name:'Lerfreg'},
]

export class Dropdown extends Component {
  constructor(props)
  {
    super(props)
    this.state={count:10,courses:[],search:''}
  }

  componentDidMount(){
    this.setState({
      courses:courses
    })
  }
  render() {
    let filteredCourses=this.state.courses.filter((course)=>{
      return course.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1
    })
    console.log(filteredCourses)
    return (
      <div>
     
        <div className="dropdown-menu">
        {
          filteredCourses.map((course)=>{
            return <li key={course.id}>{course.name}</li>
          })
        }
      </div>
      </div>
    )
  }
}

export default Dropdown
