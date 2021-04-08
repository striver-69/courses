import React, { Component } from 'react'

export class RenderCourses extends Component {
  constructor(props)
  {
    super(props)
    this.state={view:true,search:''}
  }

  render() {

    let filteredCourses=this.props.courses.filter((course)=>{
      return course.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1
    })

    const handleView=this.state.view && <div>
    {
      filteredCourses.map((course)=>{
        return <li key={course.id}>{course.name}</li>
      })
    }
    </div>

    return (
      <div>
        <button onClick={()=>this.setState({view:!this.state.view})}>View</button>
        <input type="text" value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})}/>
        {handleView}
      </div>
    )
  }
}

export default RenderCourses
