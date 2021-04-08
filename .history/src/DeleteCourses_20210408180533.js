import React from 'react'

export default function DeleteCourses({course,handleDelete}) {
  return (
    <div>
      
      <li key={course.id}>{course.name} <button onClick={()=>handleDelete(course.name)}>Delete Concepts</button></li>
    </div>
  )
}
