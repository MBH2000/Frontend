import React ,{useEffect, useState}from 'react'
import { Link, Outlet,Navigate } from 'react-router-dom'
import useUserStore  from '../store/store';
import SearchComponent from './search/SearchComponent'


const Layout = () => {
  const {user,removeUser,removeNav,nav} =useUserStore(
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <h1 className="navbar-brand" to="/">Study Mate</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coursescard">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">Team</Link>
              </li>
              <li className="nav-item">
                {user.name ?
                  <Link className="nav-link" to="/chat">Virtual Space</Link> :
                  <Link className="nav-link" to="/register">Virtual Space</Link>
                }
              </li>
            </ul>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <SearchComponent />
              </li>
            </ul>
            <ul className="navbar-nav">
              {user.name ? (
                <li className="nav-item dropdown">
                  <div className="d-flex align-items-center">
                    <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {user.name}
                    </div>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                      {(nav === false) && <li><Navigate to="/" replace={true} /></li>}
                    <li><button className="dropdown-item" onClick={handleLogout}>Log Out</button></li>
                  </ul>
                    {user.avatar && (
                      <img
                        src={`data:image/png;base64,${user.avatar}`}
                        alt="avatar"
                        className="rounded-circle ms-2"
                        style={{ width: '50px' }}
                      />
                    )}
                  </div>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    {(nav === false) && <li><Navigate to="/" replace={true} /></li>}
                    <li><button className="dropdown-item" onClick={handleLogout}>Log Out</button></li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="btn btn-outline-primary" to="/register">Register/Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout