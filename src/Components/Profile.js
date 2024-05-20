import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import '../Style/profile.css';

function Profile() {
    const location = useLocation();
    const { email } = location.state || { email: "Guest" };
    
    const handleDeleteProfile = async () => {
        try {
            // Make a DELETE request to your backend API to delete the user's profile
            await axios.delete('http://localhost:3001/api/auth/delete', {
                data: { email } // Send the user's email as data
            });
            // If the request is successful, log a message and do any necessary cleanup
            console.log('Profile deleted successfully');
            // Optionally, redirect the user to a different page or perform other actions
        } catch (error) {
            // If an error occurs, log the error and show an error message to the user
            console.error('Failed to delete profile:', error);
            alert('Failed to delete profile. Please try again later.');
        }
    };

    return (
        <div className="profile">
            <h1>Profile</h1>
            <div className="profile-details">
                <p><strong>Email:</strong> {email}</p>
                {/* Add other user details here */}
            </div>
            <div className="profile-buttons">
                <Link to="/editprofile">Edit Profile</Link>
                <button onClick={handleDeleteProfile}>Delete Profile</button>
            </div>
        </div>
    );
}

export default Profile;
