import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useUserStore  from '../store/store';

const Register = () => {
  const {setUserstate,setNav ,nav} = useUserStore((state) => ({
    setUserstate: state.setUser,
    setNav : state.setNav,
    nav : state.nav
  }));
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    type: '',
  });
  const [respone, setRespone] = useState();
  function handleInputChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setUser((oldVal) => ({ ...oldVal, [fieldName]: fieldValue }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-zchf.onrender.com/user/register', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      setRespone((oldVal)=> response.status)
      console.log(data.id)
      setUserstate(data.user.name, data.token,data.user.id);
      if (response.status === 201) {
        setNav(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section className="vh-100 bg-image">
      {(nav === true) && <Navigate to="/" replace={true} />}
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-75">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                    <form onSubmit={handleSubmit}>

                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" name='name' value={user.name} onChange={handleInputChange} required />
                        <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='email' value={user.email} onChange={handleInputChange} required />
                        <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='password' value={user.password} onChange={handleInputChange} required />
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      </div>

                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="form-check col-6 m-3">
                          <label>
                            <input className="m-3" type="radio" name="type" value="Teacher" checked={user.type === 'Teacher'} onChange={handleInputChange} />
                            Teacher
                          </label>
                          <label>
                            <input className="m-3" type="radio" name="type" value="Student" checked={user.type === 'Student'} onChange={handleInputChange} />
                            Student
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-outline-primary">Register</button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to='/login' className="fw-bold text-body"><u>Login here</u></Link ></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;