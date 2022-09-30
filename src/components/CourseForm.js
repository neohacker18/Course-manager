import React,{useState} from 'react'
import useCourseStore from '../app/courseStore'

const CourseForm=()=>{

    const addCourse=useCourseStore((state)=>state.addCourse);
    const [courseTitle, setcourseTitle] = useState("");
    console.log("Course form rendered");

    const handleCourseSubmit=()=>{
        if(!courseTitle) 
            return alert("Please add a course title");

        addCourse({
            id: Math.ceil(Math.random()*1000000), 
            tilte: courseTitle
        })
    }

  return (
    <div className="form-container">
        <input type="text" className="form-input" value={courseTitle} onChange={(e)=>setcourseTitle(e.target.value)}/>
        <button className="form-submit-btn" onClick={()=>{
            handleCourseSubmit();
        }}></button>
    </div>
  )
}

export default CourseForm