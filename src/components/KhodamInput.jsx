import React from 'react';
import '../styles/KhodamCheck.css';

const KhodamInput = ({ value, onChange }) => (
    <input
        className="khodam-input"
        type="text"
        placeholder="Masukkan nama Anda"
        value={value}
        onChange={onChange}
    />
);

export default KhodamInput;
