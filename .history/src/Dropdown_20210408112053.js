import React, { Component } from 'react'
import AddCourses from './AddCourses'
import DeleteCourses from './DeleteCourses'

let courses=[
  {id:1,name:'Aerfreg'},{id:2,name:'Berfreg'},{id:3,name:'Cerfreg'},{id:4,name:'Derfreg'},{id:5,name:'Eerfreg'},{id:6,name:'Ferfreg'},{id:7,name:'Gerfreg'},{id:8,name:'Herfreg'},{id:9,name:'Ierfreg'},{id:10,name:'Jerfreg'},{id:11,name:'Kerfreg'},{id:12,name:'Lerfreg'},
]

export class Dropdown extends Component {
  constructor(props)
  {
    super(props)
    this.state={count:10,courses:[],search:'',view:true}
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

    const handleView=this.state.view && <div>
    {
      filteredCourses.map((course)=>{
        return <li key={course.id}>{course.name}</li>
      })
    }
    </div>

    const handleSave=(id,name)=>{
      const newCourses=[...this.state.courses, {id,name}]
      this.setState({courses:newCourses})
    }


    return (
      <div>
      <AddCourses handleSave={handleSave}/>
      <button onClick={()=>this.setState({view:!this.state.view})}>View</button>
        <input type="text" value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})}/>
        {handleView}
      </div>
    )
  }
}

export default Dropdown
