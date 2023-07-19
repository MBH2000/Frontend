import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './componets/Layout'
import './App.css'
import Login from './componets/Login'
import Register from './componets/Register'
import Home from './componets/Home';
import Profile from './componets/Profile'
import Chat from './componets/Chat';

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
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
