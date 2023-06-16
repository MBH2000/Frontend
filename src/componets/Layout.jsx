import React ,{useEffect, useState}from 'react'
import { Link, Outlet,Navigate } from 'react-router-dom'
import useUserStore  from '../store/store';

const Layout = () => {
  const {user,removeUser,removeNav,nav} = useUserStore(
    (state)=>({
    user : state.user,
    removeUser:state.removeUser,
    removeNav:state.removeNav,
    nav:state.nav
  })); 
  async function handleLogout(){
    try {
      const response = await fetch('https://backend-zchf.onrender.com/user/logout', {
        method: "POST",
        mode:'cors',
        headers:{
          'Content-Type':'application/json',
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
 
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary my_navbar">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to=''>Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to=''>Classes</Link>
          </li>
          <li className="nav-item">
            {(user.name)?<Link className="nav-link" to="/chat">Virtual Space </Link>:<Link className="nav-link" to="/register">Virtual Space </Link>}
          </li>
        </ul>
        <section>
        { user.name? <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {user.name}
          </button>
          <ul className="dropdown-menu dropdown-menu-light">
            <li><Link className="dropdown-item" to='/profile'>Profile</Link></li>
            <li> {(nav === false) && <Navigate to="/" replace={true} />}
              <button className="btn btn-outline-primary"  onClick={handleLogout} > Log Out </button>
              </li>
          </ul>
          {user.avatar?
                <img
                src={`data:image/png;base64,${user.avatar}`}
                alt="avatar"
                className="rounded-circle"
                style={{ width: '50px',position:'static' }}
                fluid />
                :
                <>/</>}
        </li>
      </ul>
    </div>:<Link className="btn btn-outline-primary"  to='/register'>Register/Login</Link>}
       </section>
      </div>
    </div>
  </nav>
  <Outlet />
  <section className="">
  {/* <!-- Footer --> */}
  <footer className="text-center text-white my_footer" style={{backgroundColor: '#0a4275'}}>
    {/* <!-- Grid container --> */}
    <div className="container p-4 pb-0">
    </div>
    {/* <!-- Grid container --> */}

    {/* <-- Copyright --> */}
    {/* <!-- Copyright --> */}
  </footer>
  {/* <!-- Footer --> */}
</section>
  </>
  )
}

export default Layout