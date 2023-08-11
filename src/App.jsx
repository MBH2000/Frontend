import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './componets/Layout'
import './App.css'
import Login from './componets/Login'
import Register from './componets/Register'
import Home from './componets/Home'
import Profile from './componets/Profile'
import Chat from './componets/Chat';
import CoursesCard from './componets/allcourses/CoursesCard'
import CourseDetails from "./componets/allcourses/CourseDetailsPage";
import Team from "./componets/team/Team";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/coursesCard' element={<CoursesCard />} />
          <Route path="/team" element={ <Team /> } />
          <Route path="/CourseDetailsPage/:id" element={ <CourseDetails /> } />
        </Route>
      </Routes>
     
    </BrowserRouter>
    
    </>
  )
}

export default App
