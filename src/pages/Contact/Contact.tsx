import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [submitted, setSubmitted] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [placeholderName, setPlaceholderName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // Fetching a fake name from the API to use as a placeholder
        const fetchName = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (response.ok) {
                    const data = await response.json();
                    setPlaceholderName(data[0].name); // Assuming the first user's name for the placeholder
                } else {
                    throw new Error('Failed to fetch');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchName();
    }, []);

    useEffect(() => {
        setErrors({ email: '', password: '' });
    }, [email, password]);

    useEffect(() => {
        if (authenticated && submitted) {
            const timer = setTimeout(() => {
                navigate('/home');
                setSubmitted(false);
                setEmail('');
                setPassword('');
                setAuthenticated(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [authenticated, submitted, navigate]);

    const validateForm = () => {
        let valid = true;
        const newErrors = { email: '', password: '' };

        if (!email.trim()) {
            newErrors.email = 'Please enter email';
            valid = false;
        }

        if (!password.trim()) {
            newErrors.password = 'Please enter password';
            valid = false;
        }

        setErrors(newErrors);

        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (response.ok) {
                    const data = await response.json();
                    const matchedUser = data.find((user: { email: string, username: string }) =>
                        user.email === email && user.username === password
                    );
                    if (matchedUser) {
                        setAuthenticated(true);
                        setSubmitted(true);
                    } else {
                        setSubmitted(true);
                        setErrors({ email: 'Invalid email or password', password: 'Invalid email or password' });
                    }
                } else {
                    throw new Error('Failed to fetch');
                }
            } catch (error) {
                console.error('Error:', error);
                setErrors({ email: 'Error occurred while fetching data', password: 'Error occurred while fetching data' });
            }
        }
    };

    return (
        <div className="contact-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholderName ? `e.g. ${placeholderName}` : 'Enter your email address'}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    {errors.password && <div className="error-message">{errors.password}</div>}
                </div>
                <button type="submit">Submit</button>
                {submitted && authenticated && <div className="success-message">Successfully submitted</div>}
                {submitted && !authenticated && <div className="error-message">Authentication failed</div>}
            </form>
        </div>
    );
};

export default ContactForm;
