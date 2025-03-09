import React from 'react'
import ContactForm from '../Component/ContactForm'

import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import BlogList from '../Component/BlogList'

const AllRoutes = () => {
  return (
    <>
   
    
    <Routes>
    <Route path="/" element={< Home/>} />
      <Route path="/contactus" element={< ContactForm/>} />
      <Route path="/blogs" element={< BlogList/>} />
     
      </Routes>
  </>
  )
}

export default AllRoutes