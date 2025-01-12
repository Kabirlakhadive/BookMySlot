import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from "react-router-dom";
import './Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in:', userCredential.user);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-image-area">
                {/* Add your image here later */}
            </div>
            <div className="login-form-area">
                <h2>Welcome</h2>
                <p>Create an account for free</p>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                    />
                    <button type="submit" className="signup-button">Sign Up</button>
                    <button type="button" className="google-button">
                        <span>Sign up with Google</span>
                    </button>
                </form>
                <p className="login-footer">
                    Already have an account? <span className="signin-link" onClick={() => navigate("/signin")}>Sign in</span>
                </p>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
