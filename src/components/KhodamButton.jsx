import React from 'react';
import '../styles/KhodamCheck.css';

const KhodamButton = ({ onClick }) => (
    <button className="khodam-button" onClick={onClick}>
        Cek Khodam
    </button>
);

export default KhodamButton;
