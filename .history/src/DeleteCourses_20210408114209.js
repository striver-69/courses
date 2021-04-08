import React from 'react'

export default function DeleteCourses({course,handleDelete}) {
  return (
    <div>
      <button onClick={()=>handleDelete(course.name)}>Delete Course</button>
      <li key={course.id}>{course.name}</li>
    </div>
  )
}
