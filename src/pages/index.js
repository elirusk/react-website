import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Profile from '../components/Profile';

import Home from './Home';
import About from './About';
import Criticism from './Criticism';
import Code from './Code';
import Blog from './Blog';
import '../style/page.css';



const App = () => {
  return ( 
    <Router>
    <Profile />
    <Navbar />
    <section className='page'>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About />}/>
    <Route exact path="/criticism" element={<Criticism />}/>
    <Route exact path="/code" element={<Code />}/>
    <Route exact path="/blog" element={<Blog />}/>

    </Routes>
    </section>
    </Router>
  );
}

export default App;
