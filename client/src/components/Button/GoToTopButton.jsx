import React, { useEffect, useState } from 'react';
import { Button, useColorMode } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const { colorMode } = useColorMode(); // Access the current color mode (light or dark)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const arrowColor = colorMode === 'dark' ? 'gray.300' : 'black'; // Adjust color based on theme

  return (
    <>
      {showButton && (
        <Button
          size="lg"
          colorScheme="blue"
          onClick={scrollToTop}
          className="go-to-top-button"
          position="fixed"
          bottom="4"
          right="4"
        >
          <FaArrowUp color={arrowColor} /> {/* Apply color to the arrow */}
        </Button>
      )}
    </>
  );
};

export default GoToTopButton;
