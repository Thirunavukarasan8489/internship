import logo from './logo.svg';
import './App.css';
import Modal from './modal';
import Link from './linkedin-logo.png';
import { useState } from 'react';

function Gal() {
  const [showPhoto, setShowPhoto] = useState(false)
  return (
    <>
      {/* <img src={Link} onClick={() => setShowPhoto(true)}/> */}
      <input onClick={() => setShowPhoto(true)} src={Link} />
      {showPhoto && (
        <Modal
          photo={<img src={Link} width={200} />}
          close={setShowPhoto}
        />
      )}
    </>
  );
}

export default Gal;
