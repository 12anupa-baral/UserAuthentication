import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../Style/profile.css';

function Profile() {
    const location = useLocation();
    const { email } = location.state || { email: "Guest" };
    
    return (
        <div className="profile">
            <h1>Profile</h1>
            <div className="profile-details">
                <p><strong>Email:</strong> {email}</p>
                {/* Add other user details here */}
            </div>
            <Link to="/edit-profile">Edit Profile</Link>
        </div>
    );
}

export default Profile;
