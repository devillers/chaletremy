// Popup.js
import React from 'react';
import '../../public/style/popUp.css';

const Popup = ({ imageSrc, onClose }) => {
  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="popup-close" onClick={onClose}>
          &times;
        </span>
        <img src={imageSrc} alt="Pop-up" />
      </div>
    </div>
  );
};

export default Popup;
