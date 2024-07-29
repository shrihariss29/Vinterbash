import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import srivv from "../assets/pic2.jpg";
import osagal from "../assets/osagal.jpg";

const schoolLinks = {
    "Sri Vageesha Vidhyashram": {
        driveLink: 'https://drive.google.com/file/d/1GnkYNO1oSirCotaWj6zPIqUOLLTDl2az/view?usp=drive_link',
        image: srivv
    },
    "Sri Vignesh Vidhyalaya": {
        driveLink: 'https://example.com/vignesh',
        image: 'https://via.placeholder.com/150?text=Sri+Vignesh'
    },
    "Sri Akilandeswari Vidhyalaya": {
        driveLink: 'https://example.com/SAV',
        image: 'https://via.placeholder.com/150?text=Sri+Akilandeswari'
    },
    "RSK Higher Secondary School": {
        driveLink: 'https://example.com/RSK',
        image: 'https://via.placeholder.com/150?text=RSK'
    },
    "Alpha Plus Matriculation Higher Secondary School": {
        driveLink: 'https://example.com/Alpha',
        image: 'https://via.placeholder.com/150?text=Alpha'
    },
    "ST. JOAN OF ARC INTERNATIONAL SCHOOL": {
        driveLink: 'https://example.com/STjoan',
        image: 'https://via.placeholder.com/150?text=ST+Joan'
    },
    "Brindavan Vidyalaya": {
        driveLink: 'https://example.com/Brindhavan',
        image: 'https://via.placeholder.com/150?text=Brindavan'
    },
    "Chinmaya Vidhyalaya": {
        driveLink: 'https://example.com/Chinmaya',
        image: 'https://via.placeholder.com/150?text=Chinmaya'
    },
    "Sri Vignesh Public School": {
        driveLink: 'https://example.com/Vigneshpublic',
        image: 'https://via.placeholder.com/150?text=Sri+Vignesh+Public'
    },
    "Santhanam Vidyalaya": {
        driveLink: 'https://example.com/Santhanam',
        image: 'https://via.placeholder.com/150?text=Santhanam'
    },
    "Aurobindo International School": {
        driveLink: 'https://example.com/Aurobindo',
        image: 'https://via.placeholder.com/150?text=Aurobindo'
    },
    "Mahathma Gandhi Centenary Vidhyalaya": {
        driveLink: 'https://example.com/MGCV',
        image: 'https://via.placeholder.com/150?text=MGCV'
    },
    "Kamala Niketan Montessari School": {
        driveLink: 'https://example.com/knms',
        image: 'https://via.placeholder.com/150?text=KNMS'
    },
    "Alpha Cambridge International": {
        driveLink: 'https://example.com/alpha',
        image: 'https://via.placeholder.com/150?text=Alpha+Cambridge'
    },
    "Alpha Wisdom Vidhyashram": {
        driveLink: 'https://example.com/alpha-wisdom',
        image: 'https://via.placeholder.com/150?text=Alpha+Wisdom'
    },
    "Govt Boys School, Srirangam": {
        driveLink: 'https://example.com/govt-boys',
        image: 'https://via.placeholder.com/150?text=Govt+Boys'
    },
    "Old Student Association": {
        driveLink: 'https://drive.google.com/file/d/1GnkYNO1oSirCotaWj6zPIqUOLLTDl2az/view?usp=drive_link',
        image: osagal
    }
};

const SchoolPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const school = location.state ? location.state.school : null;

    useEffect(() => {
        if (!school) {
            navigate('/');
        } else if (school === "Old Student Association") {
            navigate('/osagallery');
        }
    }, [school, navigate]);

    if (!school || school === "Old Student Association") {
        return null;
    }

    const { driveLink, image } = schoolLinks[school] || {};

    return (
        <div className='schoolimage'>
            {image && <img src={image} alt={school} />}
            <h1 className='Leaderboard'>Thank you, {school}</h1>
            <p>Your support and cooperation has been immense for this edition of Vinterbash. We were much elated with your presence.
            So we have tried our best to give you the moments you spent with us. This is a new effort from us, doing it for the first time in Trichy.
            We've given the download link below. As the pictures are of highest quality, the file size will be large.</p>
            {driveLink ? (
                <a href={driveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Download</a>
            ) : (
                <p>Photos will be coming soon</p>
            )}
        </div>
    );
};

export default SchoolPage;
