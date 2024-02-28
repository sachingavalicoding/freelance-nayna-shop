<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CreateForm from './components/CreateForm'
import UserList from './components/UserList'
import UserPreview from './components/UserPreview'
const App = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/form' element={<CreateForm />} /> 
        <Route path='/users' element={<UserList />} /> 
        <Route path='/users' element={<UserList />} /> 
        <Route path='/user/:userId' element={<UserPreview />} /> 
       </Routes>
    </BrowserRouter>
  )
}

export default App
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateForm from "./components/CreateForm";
import UserList from "./components/UserList";
import UserPreview from "./components/UserPreview";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<CreateForm />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<UserPreview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
>>>>>>> d6c6f0d (dummy site is ready)
