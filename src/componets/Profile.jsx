import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import useUserStore  from '../store/store';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Navigate } from 'react-router-dom';
const Profile = () => {
  const [info, setInfo] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editin, setEditin] = useState();
  const [file, setFile] = useState(null);
  const {user,setUserstate,removeUser,removeNav,nav} = useUserStore(
    (state)=>({
    user : state.user,
    setUserstate: state.setUser,
    removeUser:state.removeUser,
    removeNav:state.removeNav,
    nav:state.nav
  }));  

  function handleEditChange() {
    setEdit(oldval=> !oldval)
    setEditin((oldVal) => ({ ...oldVal, name: info.name, email:info.email ,number:info.number,about:info.about}));
  }

  function handleInputChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setEditin((oldVal) => ({ ...oldVal, [fieldName]: fieldValue }));
  }
  


  const handleFileChange = (event) => {
    const formData = new FormData();
    setFile(event.target.files[0]);
    formData.append('avatar', file);
  };

  const upload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('avatar', file);
    fetch('https://backend-zchf.onrender.com/user/avatar', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + user.token,
        'X-User-Name': user.name
      },
      body: formData
    })
      .then(response => {
        getuser()
        setFile(null)
      })
      .catch(error => {
      });
  };
  

  async function getuser() {
    try {
      const response = await fetch('https://backend-zchf.onrender.com/user/me', {
        method: "GET",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.token,
          'X-User-Name': user.name
        },
      });

      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteUsr() {
    try {
      const response = await fetch('https://backend-zchf.onrender.com/user/delete', {
        method: "DELETE",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.token,
          'X-User-Name': user.name
        },
        
      });
    } catch (error) {
      console.error(error);
    }
    removeUser();
    removeNav();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-zchf.onrender.com/user/update', {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.token,
          'X-User-Name': user.name
        },
        body: JSON.stringify(editin),
      });
      const data = await response.json();
      setUserstate(data.name,user.token , data.avatar);
      if(response.status === 200){
        handleEditChange()
        getuser()
        setEditin((oldVal) => ({ ...oldVal, name: info.name, email:info.email , number:info.number,about:info.about}));
        console.log(editin)
        
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.click();
  };
  
  useEffect(() => {
    getuser();
  }, []);
  return (
    <>
    <section style={{ backgroundColor: '#eee' ,height:'100vh'}} className='py-5'>
    {(nav === false) && <Navigate to="/" replace={true} />}
    {info? <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol>
          <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
            
            {edit? <button className="btn btn-outline-danger " onClick={handleEditChange}>Cancel</button>:<button className="btn btn-outline-primary" onClick={handleEditChange}>edit</button>}
            {edit&& <button className="btn btn-outline-primary mx-2" onClick={handleSubmit} >Save</button>}
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol lg="4">
          <MDBCard className="mb-4">
            <MDBCardBody className="text-center d-flex flex-column justify-content-center align-items-center">
              {info.avatar?
                <MDBCardImage
                src={`data:image/png;base64,${info.avatar}`}
                alt="avatar"
                className="rounded-circle"
                style={{ width: '150px',position:'static' }}
                fluid />
                :
                <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle"
                style={{ width: '150px',position:'static' }}
                fluid />}
                {edit&& 
                    <div className='m-3 text-center d-flex flex-row justify-content-center align-items-center '>
                    <input ref={buttonRef} type='file' accept='.png, .jpeg, .jpg' name='avatar' style={{display: 'none'}}  onChange={handleFileChange} />
                    <div className='btn btn-outline-primary mx-3'  onClick={handleClick}>Chose</div>
                    {file&&  <button className="btn btn-outline-primary " onClick={upload} >Save</button>}
                  </div>
                  } 
                
             {edit? <input className=' text-center d-flex flex-row justify-content-center align-items-center ' type='text' name='about' value={editin.about}  placeholder= 'please add somthing about you' onChange={handleInputChange} />:<p className="text-muted" >{info.about}</p>} 
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="mb-4 mb-lg-0">
            <MDBCardBody className="p-0">
              <MDBListGroup flush="true" className="rounded-3">
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <MDBIcon fas icon="globe fa-lg text-warning" />
                  <MDBCardText>"Email"</MDBCardText>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                  <MDBCardText>mdbootstrap</MDBCardText>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="8">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Full Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                {edit? <input type='text' name='name' value={editin.name} onChange={handleInputChange}/>:<MDBCardText className="text-muted" required>{info.name}</MDBCardText>}
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                {edit? <input type='email' name='email' value={editin.email} onChange={handleInputChange} />:<MDBCardText className="text-muted" required>{info.email}</MDBCardText>}
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Mobile</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                {edit? <input type='text' name='number' value={editin.number}  placeholder= 'please add your number' onChange={handleInputChange} />:<MDBCardText className="text-muted" >{info.number}</MDBCardText>}
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Type</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                <MDBCardText className="text-muted" >{info.type}</MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer> : <>Loading</>}
  </section>
  </>
  );
};

export default Profile;
