import React from 'react';
import './certificate.css'; // Importing the CSS file

// Importing certificate images - adjust these paths based on your project structure
import certificate1 from '../Images/NLP.jpg';
import certificate2 from '../Images/ML1.png';
import certificate3 from '../Images/deep.jpg';
import certificate4 from '../Images/hacrank.png';
import certificate5 from '../Images/hacsql.png';

const CertificateDisplay = () => {
    const certificates = [
        { id: 1, title: "Natural Languahe Processing in Tensorflow", imageUrl: certificate1 },
        { id: 2, title: "Supervised Machine Learnind and Classification", imageUrl: certificate2 },
        { id: 3, title: "Neural Network and Deep Learning", imageUrl: certificate3},
        { id: 4, title: "Python Basic(Hacker Rank)", imageUrl: certificate4},
        { id: 5, title: "SQL Basic(Hacker Rank)", imageUrl: certificate5},

    
        // Add more certificates as needed
    ];

    return (
        <div className="certificate-gallery1">
            <h1 className='title'>CERTIFICATES</h1>
         <div className="certificate-gallery">
            {certificates.map((certificate) => (
                <div key={certificate.id} className="certificate-item">
                    <img src={certificate.imageUrl} alt={certificate.title} />
                    <p>{certificate.title}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default CertificateDisplay;

