import React, { useState, useEffect } from 'react';

function Header() {
  const titles = ['I am a Programmer..', 'I am a Developer..'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (charIndex < titles[titleIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedTitle((prevTitle) => prevTitle + titles[titleIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 60); // Adjust the delay as needed
    } else {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedTitle('');
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 1000); // Adjust the delay before switching titles
    }

    return () => clearTimeout(timeout);
  }, // eslint-disable-next-line
   [titleIndex, charIndex]);

  return (
    <header>
      <h1>{displayedTitle}</h1>
    </header>
  );
}

export default Header;