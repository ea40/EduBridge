import React from 'react'

function Courses({params}: {params: {courseName: string}}) {
  return (
    <div>{params.courseName}</div>
  )
}

export default Courses