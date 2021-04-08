import React from 'react'

export default function DeleteCourses({course}) {
  return (
    <div>
      <li key={course.id}>{course.name}</li>
    </div>
  )
}
