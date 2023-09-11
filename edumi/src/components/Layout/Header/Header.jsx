import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill } from 'react-icons/ri';
import {
  Drawer,
  DrawerHeader,
  VStack,
  HStack,
  useDisclosure,
  Button,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };

  const logoutHandler = () => {
    console.log('logout');
    onClose();
  };
  return (
    <>
      <ColorModeSwitcher className="switch" />
      <Button className="option" onClick={onOpen} colorScheme={'yellow'}>
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader
            className="leftSlide"
            height={'3rem'}
            borderBottomWidth={'1px'}
          >
            COURSE BUNDLER
          </DrawerHeader> */}
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <LinkButton url="/" title="Home" onClose={onClose} />
              <LinkButton
                url="/courses"
                title="Browse All Courses"
                onClose={onClose}
              />
              <LinkButton
                url="/request"
                title="Request A Course"
                onClick={onClose}
              />
              <LinkButton url="/contact" title="Contact" onClose={onClose} />
              <LinkButton url="/about" title="About" onClose={onClose} />

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

                        <Button colorScheme={'yellow'} onClick={logoutHandler}>
                          {' '}
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button>
                            <RiDashboardFill />
                            Dashboard
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

const LinkButton = ({ url = '/', title = 'Home' }) => (
  <Link to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);
