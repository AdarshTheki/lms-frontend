import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RequireAuth from './components/Auth/RequireAuth';
import About from './pages/Aboutus';
import Contact from './pages/Contact';
import CourseDescription from './pages/Course/CourseDescription';
import CourseList from './pages/CourseList';
import CreateCourse from './pages/Course/CreateCourse';
import Denied from './pages/Denied';
import Home from './pages/Home';
import Notfound from './pages/NotFound';
import LogIn from './pages/LogIn';
import SignUp from './pages/Signup';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/courses' element={<CourseList />} />
      <Route path='/course/description' element={<CourseDescription />} />

      <Route element={<RequireAuth allowedRoles={['ADMIN']} />}>
        <Route path='/course/create' element={<CreateCourse />} />
      </Route>

      <Route path='/contact' element={<Contact />} />
      <Route path='/denied' element={<Denied />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  );
};

export default App;
