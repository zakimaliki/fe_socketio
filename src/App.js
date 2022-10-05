import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import Chatroom from './pages/Chatroom.jsx';
import Latihan from './pages/Latihan.jsx';
import Coba from './pages/Coba.jsx';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace="true" />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/coba' element={<Coba/>}/>
        <Route path='/latihan' element={<Latihan/>}/>
        <Route path='/room' element={<Chatroom/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App