import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/Firebase';
import './Login.css';
// import imglogo from '../../assets/logoimg.jpg'
import backgroundlogo from '../../assets/backgroundlogo.jpg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError(''); 

        
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
        
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log('Logged in:', { email });

            
            localStorage.setItem('userId', user.uid);

            
            navigate('/userregistration');
        } catch (err) {
            console.error('Login failed:', err.message);

            
            console.log(`Error code: ${err.code}, Error message: ${err.message}`);

            
            switch (err.code) {
                case 'auth/wrong-password':
                    setError('Incorrect password. Please try again.');
                    break;
                case 'auth/user-not-found':
                    setError('No user found with this email.');
                    break;
                case 'auth/invalid-email':
                    setError('Invalid email format.');
                    break;
                case 'auth/network-request-failed':
                    setError('Network error. Please check your connection.');
                    break;
                case 'auth/too-many-requests':
                    setError('Too many unsuccessful attempts. Please try again later.');
                    break;
                default:
                    setError('Failed to log in. Please try again.');
                    break;
            }
        }
    };

    return (
        <div className="container">
            <div className="left-side">
            <img className='img2' height={1000} width={700}  src={backgroundlogo} alt="" />
               
                
                
               
            </div>

            <div className="right-side">
                <h2>Login</h2>
                
                <form>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    
                    {error && <p className="error-message">{error}</p>}

                    <button
                        type="button"
                        onClick={handleLogin}
                        disabled={!email || !password}
                    >
                        Login
                    </button>
                </form>
                <p>or</p>
                <p className="signup-link" onClick={() => navigate('/signup')}>Sign Up</p>
            </div>
        </div>
    );
};

export default Login;