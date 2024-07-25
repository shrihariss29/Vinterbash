

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const schoolLinks = {
    "Sri Vageesha Vidhyashram": 'https://drive.google.com/file/d/1GnkYNO1oSirCotaWj6zPIqUOLLTDl2az/view?usp=drive_link',
    "Sri Vignesh Vidhyalaya": 'https://example.com/vignesh',
    "Sri Akilandeswari vidyalaya" : 'https://example.com/SAV', 
    "RSK higher secondary school" : 'https://example.com/RSK', 
    "Alpha Plus Matriculation Higher Secondary School" : 'https://example.com/ALpha',
    "ST. JOAN OF ARC INTERNATIONAL SCHOOL" : 'https://example.com/STjoan',
    "Brindavan Vidyalaya" : 'https://example.com/Brindhavan', 
    "Chinmaya Vidhyalaya" : 'https://example.com/CHinmaya',
    "Sri Vignesh Public School" : 'https://example.com/Vigneshpublic',
    "Santhanam Vidyalaya" : 'https://example.com/Santhanam', 
    "Aurobindo International School" : 'https://example.com/Aurobindo',
    "Mahathma Gandhi Centenary Vidhyalaya" : 'https://example.com/MGCV',
    "Nava Barath Vidhyalaya" : 'https://example.com/Navabharath',
    "Kamala Niketan Montessari School" : 'https://example.com/knms',
    "Alpha Cambridge International" : 'https://example.com/alpha'
};

const SchoolPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const school = location.state ? location.state.school : null;

    if (!school) {
        navigate('/');
        return null;
    }

    const driveLink = schoolLinks[school];

    return (
        <div className='schoolimage'>
            <h1 className='Leaderboard'>{school}</h1>
            <p>We have given the download link below. As the pictures are of highest quality, the file size will be large</p>
            {driveLink ? (
                <a href={driveLink} className="btn btn-primary" target='blank'>Download</a>
            ) : (
                <p>Photos will be coming soon</p>
            )}
        </div>
    );
};

export default SchoolPage;
