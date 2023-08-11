import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useUserStore from '../../store/store';
import usePageStore  from '../../store/store2';
import CourseDetails from './CourseDetailsPage';
import './courses.css';

const CoursesCard = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const {
    course,
    setCourse,
  } = useUserStore((state) => ({
    course: state.course,
    setCourse: state.setCourse,
  }));
  const {
    pageNumber,
    setPageNumber,
    decPageNumber
  } = usePageStore((state) => ({
    pageNumber: state.pageNumber,
    setPageNumber: state.setPageNumber,
    decPageNumber:state.DecPageNumber
  }));
  async function getCourses() {
    setCourse();
    try {
      const response = await fetch(
        `https://backend-zchf.onrender.com/course?page=${pageNumber}&limit=6`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {},
        }
      );
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

  function loadMoreCourses() {
    setPageNumber(pageNumber);
  }
  function loadLessCourses() {
    if(pageNumber>0)
    {decPageNumber(pageNumber);}
  }

  useEffect(() => {
    getCourses();
  }, [pageNumber]);

  return (
    <>
    {course?
      <section className='coursesCard'>
        <div className='container grid2'>
          {course.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.avatar} alt='' />
                  </div>
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
                  <div className='details'>

                        <div className='box'>
                         
                          <div className='para'>
                            <h4>{val.owner}</h4>
                          </div>
                        </div>
                        <span>{val.totalTime}</span>
                  </div>
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
          <div className=''>
            {(pageNumber>0)? 
              <button className="btn btn-danger" onClick={loadLessCourses}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
              </button>
              : 
              <></>
            }
            <button className="btn btn-danger" onClick={loadMoreCourses}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
            </button>
          </div>
        </div>
</section>  
:<div className="three-body">
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
</div>
}
    </>
  );
};

export default CoursesCard;