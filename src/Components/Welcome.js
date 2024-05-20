import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Style/welcome.css';

function Welcome() {
    const location=useLocation()
  return (
    <div className='Welcome'>
    <h1> Welcome {location.state.id} To The Home</h1>   
    <Link to="/profile">View Profile</Link>
    </div>
  )
}

export default Welcome