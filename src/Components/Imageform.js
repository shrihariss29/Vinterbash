import React, { useState } from 'react';

const passcodes = {
    "12345678": "Kamala Nikethan Montessari School",
    "23456789": "Sri Vignesh Vidhyalaya",
    "34567890": "Sri Vageesha Vidhyashram",
    "45678901": "Cauvery Global",
    "56789012": "RSK CBSE School",
    "67890123": "Alpha senior secondary school",
    "78901234": "Srirangam BHSS School",
    "89012345": "Sri Renga Matriculation",
    "90123456": "Santhanam Vidhyalaya",
    "01234567": "Sri Akilandeswari Vidhyalaya",
    "11111111": "Kamakoti international School",
    "22222222": "Jayendra Matric School",
    "33333333": "Saint John Vestry HSS School"
};

const schoolImages = {
    "Kamala Nikethan Montessari School": [
        'https://via.placeholder.com/150?text=Kamala+Nikethan+1',
        'https://via.placeholder.com/150?text=Kamala+Nikethan+2',
        'https://via.placeholder.com/150?text=Kamala+Nikethan+1',
        'https://via.placeholder.com/150?text=Kamala+Nikethan+2',
        'https://via.placeholder.com/150?text=Kamala+Nikethan+1',
        'https://via.placeholder.com/150?text=Kamala+Nikethan+2',
        'https://via.placeholder.com/150?text=Kamala+Nikethan+1',
        'https://via.placeholder.com/150?text=Kamala+Nikethan+2'
    ],
    "Sri Vignesh Vidhyalaya": [
        'https://via.placeholder.com/150?text=Sri+Vignesh+1',
        'https://via.placeholder.com/150?text=Sri+Vignesh+2',
    ],
    "Sri Vageesha Vidhyashram": [
        'https://via.placeholder.com/150?text=Sri+Vageesha+1',
        'https://via.placeholder.com/150?text=Sri+Vageesha+2',
         'https://drive.google.com/uc?export=view&id=1rN4OX_xZZPQsqzd7g3NEiPjTlNxsIJdI'
    ],
    "Cauvery Global": [
        'https://via.placeholder.com/150?text=Cauvery+Global+1',
        'https://via.placeholder.com/150?text=Cauvery+Global+2'
    ],
    "RSK CBSE School": [
        'https://via.placeholder.com/150?text=RSK+CBSE+1',
        'https://via.placeholder.com/150?text=RSK+CBSE+2'
    ],
    "Alpha senior secondary school": [
        'https://via.placeholder.com/150?text=Alpha+Senior+1',
        'https://via.placeholder.com/150?text=Alpha+Senior+2'
    ],
    "Srirangam BHSS School": [
        'https://via.placeholder.com/150?text=Srirangam+BHSS+1',
        'https://via.placeholder.com/150?text=Srirangam+BHSS+2'
    ],
    "Sri Renga Matriculation": [
        'https://via.placeholder.com/150?text=Sri+Renga+1',
        'https://via.placeholder.com/150?text=Sri+Renga+2'
    ],
    "Santhanam Vidhyalaya": [
        'https://via.placeholder.com/150?text=Santhanam+Vidhyalaya+1',
        'https://via.placeholder.com/150?text=Santhanam+Vidhyalaya+2'
    ],
    "Sri Akilandeswari Vidhyalaya": [
        'https://via.placeholder.com/150?text=Sri+Akilandeswari+1',
        'https://via.placeholder.com/150?text=Sri+Akilandeswari+2'
    ],
    "Kamakoti international School": [
        'https://via.placeholder.com/150?text=Kamakoti+International+1',
        'https://via.placeholder.com/150?text=Kamakoti+International+2'
    ],
    "Jayendra Matric School": [
        'https://via.placeholder.com/150?text=Jayendra+Matric+1',
        'https://via.placeholder.com/150?text=Jayendra+Matric+2'
    ],
    "Saint John Vestry HSS School": [
        'https://via.placeholder.com/150?text=Saint+John+Vestry+1',
        'https://via.placeholder.com/150?text=Saint+John+Vestry+2'
    ]
};

const SchoolImages = ({ school }) => {
    return (
        <div>
            <h2 className='imageschool'>{school}</h2>
            <div className='image-container'>
                {schoolImages[school] ? (
                    schoolImages[school].map((image, index) => (
                        <img key={index} src={image} alt={school} />
                    ))
                ) : (
                    <p>No images available for this school.</p>
                )}
            </div>
        </div>
    );
};

const PasswordForm = () => {
    const [password, setPassword] = useState('');
    const [school, setSchool] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const sanitizedPassword = password.trim();
        if (passcodes[sanitizedPassword]) {
            setSchool(passcodes[sanitizedPassword]);
            setPassword(''); 
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
                <a className = "btn btn-success" href="/form">Logout</a>
                <p>If you have forgotten the password, kindly contact the organizer</p>
            </form>
            {school && <SchoolImages school={school} />}
        </div>
    );
};

export default PasswordForm;