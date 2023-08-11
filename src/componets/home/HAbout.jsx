import React, { useState,useEffect } from 'react';
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { Link } from "react-router-dom"
import useUserStore  from '../../store/store';

const HAbout = () => {

  const [selectedCourse, setSelectedCourse] = useState(null);
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };


  const {user,course,setCourse} = useUserStore(
    (state)=>({
    user : state.user,
    course:state.course,
    setCourse:state.setCourse
  }));
  
  async function getCourses(e) {
    setCourse()
    try {
      const response = await fetch(`http://localhost:3005/course?page=0&limit=3`, {
        method: 'GET',
        mode: 'cors',
        headers: {
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCourse(data.courses);
    } catch (error) {
      console.error(error);
      // handle error gracefully
    }
  }
  useEffect(() => {
    getCourses()
  }, []);



  return (
    <>
    {course?
      <section className='homeAbout'>
        <div className='container'>
         

          <div className='coursesCard'>
            <p style={{fontSize:'50px',fontFamily:'fantasy-bold',margin:'15px',textAlign:'center'}}>Recent Courses </p>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {course.map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      {/* <div className='img'>
                        <img src={val.avatar} alt='' />
                      </div> */}
                    </div>
                    <div className='text'>
                      <h1>{val.name}</h1>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      {/* <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div> */}
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      {val.price}
                    </h3>
                  </div>
                  <Link to={`/CourseDetailsPage/${val._id}`}>
              <button onClick={() => handleCourseClick(val)} className='outline-btn'>
              {selectedCourse && selectedCourse._id === val._id ? 'Go to Course Details' : 'View Details'}
              </button>
            </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
      :<div class="three-body">
      <div class="three-body__dot"></div>
      <div class="three-body__dot"></div>
      <div class="three-body__dot"></div>
      </div>
  }
    </>
  )
}

export default HAbout
