import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { demoUser } from '../data/properties';

export default function Login() {

    const [email, setEmail] = useState(demoUser.email);
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        alert('Login successful!');
        navigate('/profile');
    };

    const handleHakaLogin = () => {
        alert('HAKA login successful!');
        navigate('/profile');
    };

    return (
        <div>
            <h1>Welcome to UniStay</h1>

            <button onClick={handleHakaLogin}>
                Login with HAKA
            </button>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Student Email"
                    required
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}