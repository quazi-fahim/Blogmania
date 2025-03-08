
import { Route, Routes } from 'react-router-dom';
import './App.css'
import BlogList from './Component/BlogList'
import ContactForm from './Component/ContactForm'
import Nav from './Component/Nav';



function App() {
  

  return (
   <>
  

      <Nav/>
      
      <Routes>
        <Route path="/contactus" element={< ContactForm/>} />
        <Route path="/bloglist" element={< BlogList/>} />
        </Routes>
        
   </>
  )
}

export default App
