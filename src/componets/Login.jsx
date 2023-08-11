import React, { useEffect, useState } from 'react';
import { Link, Navigate, redirect } from 'react-router-dom';
import useUserStore from '../store/store';

const Login = () => {
  const {setUserstate,setNav ,nav} = useUserStore((state) => ({
    setUserstate: state.setUser,
    setNav : state.setNav,
    nav : state.nav
  }));
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setUser((oldVal) => ({ ...oldVal, [fieldName]: fieldValue }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-zchf.onrender.com/user/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      setUserstate(data.user.name, data.token,data.user.id,data.user.avatar);

      if (response.status === 200) {
        setNav(true);
        console.log(nav)
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
              <div className="col-12 col-md-9col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Login</h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='email' value={user.email} onChange={handleInputChange} required />
                        <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='password' value={user.password} onChange={handleInputChange} required />
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-outline-primary">
                          Login<Link to='/'></Link>
                        </button>

                      </div>

                      <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to='/register' className="fw-bold text-body"><u>Register </u></Link ></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  )
}

export default Login
