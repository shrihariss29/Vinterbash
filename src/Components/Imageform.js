// PasswordForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const passcodes = {
    "12345678": "Sri Vageesha Vidhyashram",
    "23456789": "Sri Vignesh Vidhyalaya",
    "34567890": "Sri Akilandeswari Vidhyalaya",
    "45678901": "RSK higher secondary school",
    "56789012": "Alpha Plus Matriculation Higher Secondary School",
    "67890123": "ST. JOAN OF ARC INTERNATIONAL SCHOOL",
    "78901234": "Brindavan Vidyalaya",
    "89012345": "Chinmaya Vidhyalaya",
    "90123456": "Sri Vignesh Public School",
    "01234567": "Santhanam Vidyalaya",
    "11111111": "Aurobindo International School",
    "22222222": "Mahathma Gandhi Centenary Vidhyalaya",
    "33333333": "Nava Barath Vidhyalaya",
    "44444444": "Kamala Niketan Montessari School",
    "55555555": "Alpha Cambridge International"
};

const PasswordForm = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const sanitizedPassword = password.trim();
        if (passcodes[sanitizedPassword]) {
            navigate('/school', { state: { school: passcodes[sanitizedPassword] } });
        } else {
            alert('Invalid passcode');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <button type="submit">Submit</button>
                <a className="btn btn-success" href="/form">Logout</a>
                <p>If you have forgotten the password, kindly contact the organizer</p>
            </form>
        </div>
    );
};

export default PasswordForm;
