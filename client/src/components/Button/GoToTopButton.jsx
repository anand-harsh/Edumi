import React, { useEffect, useState } from 'react';
import { Button, useColorMode } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [stopPosition, setStopPosition] = useState(false);
  const { colorMode } = useColorMode(); // Access the current color mode (light or dark)


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const stopPosition = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight) - window.innerHeight - 70;
    setShowButton(scrollY > 10);
    if (scrollY > stopPosition) {
      setStopPosition(true);
    } else {
      setStopPosition(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const arrowColor = colorMode === 'dark' ? 'white' : 'white'; //Adjust color based on theme
  const colorScheme = colorMode === 'dark' ? 'black' : '#ecc94b'; //Adjust color based on theme
  const hoverColor = colorMode === 'dark' ? 'gray.500' : 'yellow.400';  // Adjust color based on theme

  const buttonStyle = {
    position: 'fixed',
    bottom: stopPosition ? '90px' : '15px',
    right: '16px',
    backgroundColor: colorScheme,
    colorScheme: 'yellow',
    _hover: hoverColor,
    borderRadius: '30px',
    padding: '10px',
    zIndex: '60',
    transition: 'bottom 0.4s ease-in-out',
  };

  return (
    <>
      {showButton && (
        <Button
          size="lg"
          onClick={scrollToTop}
          className="go-to-top-button"
          style={buttonStyle}
        >
          <FaArrowUp color={arrowColor} />  {/* Apply color to the arrow */}
        </Button>
      )}
    </>
  );
};

export default GoToTopButton;
