//Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css'

const Home = () => (
  <div className='Container'>
    <h1>Welcome to User Authentication System</h1>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
    
  </div>
);

export default Home;
