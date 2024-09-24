import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Config/Firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import './Signup.css';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        setError(''); 

        if (!firstName || !lastName || !email || !password) {
            setError('All fields are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                firstName,
                lastName,
                email,
            });

            console.log('User signed up and data stored:', user.uid);
            navigate('/');
        } catch (err) {
            console.error('Error during signup:', err);
            setError('Failed to sign up. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="left-side">
                
                <h1>Welcome to Hotel <br /> Management System</h1>
                <img  src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp" />
                
            </div>

            <div className="right-side">
                <h2>Signup</h2>
                <form>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

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
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="toggle-password"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>

                    
                    {error && <p className="error-message">{error}</p>}

                    <button
                        type="button"
                        onClick={handleSignup}
                        disabled={!firstName || !lastName || !email || !password}
                    >
                        Signup
                    </button>
                </form>
                <p>or</p>
                <p className="login-link" onClick={() => navigate('/')}>Already have a profile?</p>
            </div>
        </div>
    );
};

export default Signup;