import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/editProfile.css';

function EditProfile() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await axios.put('http://localhost:3001/api/auth/update', {
                email,
                password
            });
            setMessage('Profile updated successfully!');
            // Redirect to profile page or any other page
            navigate('/profile', { state: { email: response.data.email } });
        } catch (error) {
            setError('Failed to update profile');
            console.error(error);
        }
    };

    return (
        <div className="edit-profile">
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Update Profile</button>
            </form>
            {error && <p className='error'>{error}</p>}
            {message && <p className='message'>{message}</p>}
            <br />
            <Link to="/profile">Back to Profile</Link>
        </div>
    );
}

export default EditProfile;
