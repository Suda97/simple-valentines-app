import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

// App Component
const App = () => {
  const [showPopup, setShowPopup] = useState(true); // State to show popup
  const [popupPosition, setPopupPosition] = useState({ top: '50%', left: '50%' });
  const [noClickCount, setNoClickCount] = useState(0); // State tracking the click number
  const [showText, setShowText] = useState(false); // New state to show text after "Yes" click
  const soundEffect = new Audio('/<sound_effect>'); // Sound effect file placed in public dir

  // Function to handle popup button click (Yes/No)
  const handlePopupButtonClick = (response) => {
    if (response === 'Yes') {
      soundEffect.play();
      document.body.style.backgroundImage = 'url(https://media1.tenor.com/m/WsWej1C3ePYAAAAd/yippee-cat-kitty.gif)';
      setShowPopup(false); // Hide popup
      setShowText(true); // Show text after "Yes"
    } else {
      setNoClickCount(noClickCount + 1);
      if (noClickCount >= 3) {
        setPopupPosition({ top: '50%', left: '50%' });
      } else {
        const randomTop = Math.floor(Math.random() * 80) + 10; // Setting random popup position
        const randomLeft = Math.floor(Math.random() * 80) + 10;
        setPopupPosition({ top: `${randomTop}%`, left: `${randomLeft}%` }); 
      }
    }
  };

  return (
    <div className="app">
      {/* Popup Window */}
      <div 
        className={`popup ${showPopup ? 'show' : ''}`} 
        style={{ top: popupPosition.top, left: popupPosition.left }}
      >
        <div className="popup-content">
          <h2>Will You be my valentine?</h2>
          <button 
            className="yes" 
            onClick={() => handlePopupButtonClick('Yes')}
          >
            Yes
          </button>
          <button 
            className={`no ${noClickCount >= 5 ? 'exit-animation' : ''}`} 
            onClick={() => handlePopupButtonClick('No')}
          >
            No
          </button>
        </div>
      </div>

      {/* Text displayed after clicking "Yes" */}
      {showText && <h3 className="confirmation-text">💕 I love You Pookie! 💕</h3>}
    </div>
  );
};

// Render the App
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Root container not found.");
}
