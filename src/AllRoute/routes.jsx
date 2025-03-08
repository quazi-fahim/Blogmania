import React from 'react';

import Nav from './Nav';

import ContactForm from '../Component/ContactForm';

const AppRoutes = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/contactus" element={< ContactForm/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
