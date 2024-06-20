import React from 'react';
import '../styles/KhodamCheck.css';

const KhodamList = ({ khodams }) => (
    <div className="khodam-list">
        {khodams.map((khodam, index) => (
            <p key={index} className="khodam-item">{khodam}</p>
        ))}
    </div>
);

export default KhodamList;
