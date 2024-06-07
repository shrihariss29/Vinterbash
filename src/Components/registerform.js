import React, { useState } from 'react';

const Registerform = () => {
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'pmmodiistheboss') {
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSfKHIx2UrKBHOi1QJHaH8mV66LA9fIWKe9ypZt7wzMQ5E709w/viewform', '_blank');
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
