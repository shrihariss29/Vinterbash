import React, { useState } from 'react';

const Registerform = () => {
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password);
        if (password === process.env.REACT_APP_PASSWORD) {
            window.open('https://forms.gle/WNRPjo7S4ZaYmp8a9', '_blank');
        } else {
            alert('Incorrect password');
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
                <a className="btn btn-success" href="/Events">Return to events page</a>
                <p>If you have forgotten the password, kindly contact the organizer</p>
            </form>
        </div>
    );
};

export default Registerform;
