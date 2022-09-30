import create from 'zustand';
import {devtools,persist} from 'zustand/middleware';

const courseStore=(set)=>({
    //initial state
    courses: [],
    addCourse: (course)=>{
        set((state)=>({
            courses: [course,...state.courses], //basically adding course(the change) to the existing courses array
        }))
    },
    removeCourse: (courseId)=>{
        set((state)=>({
            courses: state.courses.filter((c)=>c.id!==courseId)
        }))
    },
    toggleCourseStatus: (courseId)=>{
        set((state)=>({
            courses: state.courses.map((course)=>course.id===courseId?{...course,completed: !course.completed}:course)
        }))
    }
})

const useCourseStore=create(
    devtools(
        persist(courseStore,{
            name:"courses"
        })
    )
)

export default useCourseStore;