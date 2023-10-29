import React from 'react';
import { RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill } from 'react-icons/ri';
import {
  Drawer,
  VStack,
  HStack,
  useDisclosure,
  Button,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// other file imports
import './header.css';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';

/**
 * Reusable Component for LinkButton in the sidebar
 * 
 * @param {string} url (default value = "/") - The url link that renders corresponding component
 * @param {string} title (default value = "Home") - Text to display on LinkButton
 * @param {function} closingHandler - Handler function to close sidebar on click
 */
const LinkButton = ({ url = '/', title = 'Home', closingHandler }) => (
  <Link to={url} onClick={closingHandler}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);


/**
 * Header with Drawer and DarkMode Component
 * 
 * @returns {JSX.Element} Renders the header component 
 */
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true; // Change this based on user authentication status
  const user = {
    role: 'admin', // Change this based on the user's role
  };
  
  return (
    <>
      {/* Color mode switcher */}
      <ColorModeSwitcher className="switch" />

      {/* Button to open the sidebar */}
      <Button className="option" onClick={onOpen} colorScheme={'yellow'}>
        <RiMenu5Fill />
      </Button>

      {/* Sidebar (Drawer) */}
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              
              {/* LinkButtons in the sidebar */}
              <LinkButton url="/" title="Home" closingHandler={onClose} />
              <LinkButton url="/courses" title="Browse All Courses" closingHandler={onClose} />
              <LinkButton url="/request" title="Request A Course" closingHandler={onClose} />
              <LinkButton url="/notes" title="Notes" closingHandler={onClose} />
              <LinkButton url="/contact" title="Contact" closingHandler={onClose} />
              <LinkButton url="/about" title="About" closingHandler={onClose} />

              {/* Profile, Logout, and Dashboard Button in sidebar */}
              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile" onClick={onClose}>
                          <Button colorScheme={'yellow'}>Profile</Button>
                        </Link>
                        <p>OR</p>
                        <Button colorScheme={'yellow'} onClick={onClose}>
                          <RiLogoutBoxLine /> Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button>
                            <RiDashboardFill /> Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={onClose}>
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/signup" onClick={onClose}>
                      <Button colorScheme={'yellow'}>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
