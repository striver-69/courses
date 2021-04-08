import React, { Component } from 'react'
import AddCourses from './AddCourses'
import DeleteCourses from './DeleteCourses'

let courses=[
  {id:1,name:'maths'},{id:2,name:'physics'},{id:3,name:'Chemistry'},{id:4,name:'Biology'},{id:5,name:'Hindi'},{id:6,name:'History'},{id:7,name:'Machine Learning'},{id:8,name:'AI'},{id:9,name:'DeepLearning'},{id:10,name:'Computer'},{id:11,name:'CourseX'},{id:12,name:'CourseY'},
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

    const handleDelete=(id)=>{
      let newCourses=[...this.state.courses]
      newCourses.map((course)=>{
        return course.id !==id
      })
      this.setState({courses:newCourses})
    }

    const handleView=this.state.view && <div>
    {
      filteredCourses.map((course)=>{
        return <DeleteCourses handleDelete={handleDelete} course={course}/>
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
