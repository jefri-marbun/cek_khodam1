import React, { useState } from 'react';
import KhodamInput from './KhodamInput';
import KhodamButton from './KhodamButton';
import KhodamList from './KhodamList';
import '../styles/KhodamCheck.css';

const KhodamCheck = () => {
    const [name, setName] = useState('');
    const [khodams, setKhodams] = useState([]);

    const khodamList = [
        
        
        'Mba Mba Ava Korea',
        'Reja Arap',
        'Ava Wibu',
        'Gojo Sitorus',
        'AAN JAYA',
        'Dustin Tifanny',
        'Abe Cekut',
        'Papi Abe',
        'Ganta',
        'Willi the kid',
        'Jeje Slebew',
        'Bonge SCBD',
        'Fajar Sadboy'
        
    ];

    const handleCheck = () => {
        const shuffledKhodams = khodamList.sort(() => 0.5 - Math.random());
        const selectedKhodams = shuffledKhodams.slice(0, 1);
        setKhodams(selectedKhodams);
    };

    return (
        <div className="khodam-check">
            <h1 className="title">Cek Khodam </h1>
            <p className="subtitle">Masukkan nama Anda dan temukan khodam Anda!</p>
            <KhodamInput value={name} onChange={(e) => setName(e.target.value)} />
            <KhodamButton onClick={handleCheck} />
            <KhodamList khodams={khodams} />
            <footer className="powered-by">Powered by Jep</footer>
        </div>
    );
};

export default KhodamCheck;
