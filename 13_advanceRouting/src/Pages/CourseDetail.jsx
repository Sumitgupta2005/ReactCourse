import React from 'react'
import { useParams } from 'react-router-dom'    

const CourseDetail = () => {

    const param = useParams()
    console.log(param)

  return (
    <div>
      CourseDetail
    </div>
  )
}

export default CourseDetail
