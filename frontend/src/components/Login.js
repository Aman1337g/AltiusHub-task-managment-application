import React, {useState} from 'react';
import API from '../api';

function Login({setLoggedIn}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const {data} = await API.post('/auth/login', {email, password});
            localStorage.setItem('token', data.token);
            setLoggedIn(true);
        } catch(err) {
            alert('Invalid Credentials');
        }
    };

    return (
        <form onSubmit = {handleLogin}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
            <button type='submit'>Login</button>
        </form>
    );
}

export default Login;