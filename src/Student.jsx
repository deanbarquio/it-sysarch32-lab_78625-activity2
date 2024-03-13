// Student.jsx
import React from 'react';

function Student({ id, name, email, image }) {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
            {/* You can include more data or components here */}
        </div>
    );
}

export default Student;
