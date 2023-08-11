import React, { useState, useEffect } from 'react';
import './moredetails.css';
import { CourName } from "../../dummydata"
import { useParams } from 'react-router-dom';
import useUserStore  from '../../store/store';
import usePageStore  from '../../store/store2';

const CourseDetails = () => {
  const { id } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  useEffect(() => {
    const course = CourName.find((course) => course.id === Number(id));
    setSelectedCourse(course);
  }, [id]);


  const {user} = useUserStore(
    (state)=>({
    user : state.user,

  }));
  const [coursedetails, setCourseDetails] = useState(null);
  async function getCourseDetails(e) {
    try {
      const response = await fetch(`http://localhost:3005/course/${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCourseDetails(data);
    } catch (error) {
      console.error(error);
      // handle error gracefully
    }
  }
  useEffect(() => {
    getCourseDetails();
  }, []);
  return (
    <>
      {coursedetails ?
        <div>
          <div className='header'>

              <>
                <div className='more_d'>
                  <h1 className='n1'>{coursedetails.name}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>{coursedetails.rating}</label>
                  </div>
                  <div className='item'>
                    <h4>Created By <i><u>{coursedetails.owner}</u></i></h4>
                  </div>
                </div>
                <div className='d-2 '>
                  <h2>What you'll learn</h2>
                  {/* <ul>
                    <div className="learn-items">
                      {selectedCourse.learnItems.map((item, index) => (
                      <p key={index}>{item}</p>
                      ))}
                      {selectedCourse.numlecture}
                    </div>
                  </ul> */}
                  <div className='flex-row'>
                    <h3>
                      Price of the Course:
                      {coursedetails.price}
                    </h3>
                    <button className='b-btn'>Enroll Now</button>
                  </div> 
                </div>
              </>
          </div>
        </div> 
        : 
        <div class="three-body">
          <div class="three-body__dot"></div>
          <div class="three-body__dot"></div>
          <div class="three-body__dot"></div>
        </div>
      }
    </>
  );
}

export default CourseDetails;
