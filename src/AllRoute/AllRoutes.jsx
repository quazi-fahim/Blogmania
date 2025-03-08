import React from 'react'
import ContactForm from '../Component/ContactForm'
import BlogList from '../Component/BlogList'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <>
   
    
    <Routes>
      <Route path="/contactus" element={< ContactForm/>} />
      <Route path="/bloglist" element={< BlogList/>} />
      </Routes>
  </>
  )
}

export default AllRoutes