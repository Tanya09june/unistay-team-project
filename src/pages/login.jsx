import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        alert('Login successful!');
        navigate('/profile');
    };

    return (
        <div className="page-wrapper" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh'
        }}>

            <div className="placeholder-card" style={{
                maxWidth: '450px',
                width: '100%',
                padding: '30px'
            }}>

                <h1 style={{ textAlign: 'center' }}>Welcome to UniStay</h1>
                <p style={{ textAlign: 'center' }}>
                    Student Housing in Helsinki, Espoo and Vantaa
                </p>

                <button className="btn btn-primary"
                        style={{ width: '100%', padding: '12px' }}
                        onClick={handleLogin}>
                    Login with HAKA
                </button>

                <form onSubmit={handleLogin}>

                    <p>Student Email</p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px' }}
                    />

                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px' }}
                    />

                    <button type="submit" className="btn btn-secondary"
                            style={{ width: '100%', marginTop: '15px', padding: '12px' }}>
                        Log In to UniStay
                    </button>

                </form>

                <p style={{ textAlign: 'center' }}>Forgot Password?</p>

            </div>
        </div>
    );
}