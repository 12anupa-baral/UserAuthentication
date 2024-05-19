import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/', { email, password });
            if (response.data === 'exist') {
                navigate('/Welcome', { state: { id: email } });
            } else if (response.data === 'notexist') {
                setError('User has not signed up');
            }
        } catch (err) {
            setError('Wrong details or server error');
            console.error(err);
        }
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    name="email" 
                    id="email" 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    name="pwd" 
                    id="pwd" 
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className='error'>{error}</p>}
            <br />
            <p>Or</p>
            <Link to="/signup">SignUp Page</Link>
        </div>
    );
}

export default Login;
