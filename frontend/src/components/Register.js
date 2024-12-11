// register component
import React, {useState} from 'react';
import API from '../api';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        profileImage: null,
    });

    const handleRegister = async(e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('username', formData.username);
        form.append('email', formData.email);
        form.append('password', formData.password);
        form.append('profileImage', formData.profileImage);

        try {
            await API.post('/auth/register', form);
            alert('Registration successful!');
        } catch(err) {
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input
                type = "text"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                placeholder='Username'
                required
            />
            <input
                type = "text"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder='Email'
                required
            />
            <input
                type = "text"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                placeholder='Username'
                required
            />
            
        </form>
    )
}