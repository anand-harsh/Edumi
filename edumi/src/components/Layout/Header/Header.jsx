import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { Button, DrawerContent } from '@chakra-ui/react';
import { RiMenu5Fill } from 'react-icons/ri';
import { Drawer, DrawerHeader } from '@chakra-ui/react';
import { DrawerOverlay, DrawerBody } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HStack } from '@chakra-ui/react';
import { RiLogoutBoxLine, RiDashboardFill } from 'react-icons/ri';
import './header.css';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user={
    role:'admin'
  }

  const logoutHandler = () => {
    console.log('logout');
  }
  return (
    <>
      <ColorModeSwitcher className="switch" />
      <Button className="option" onClick={onOpen} colorScheme={'yellow'}>
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className="leftSlide" height={"3px"} borderBottomWidth={'1px'}>
            COURSE BUNDLER
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <LinkButton url="/" title="Home" />
              <LinkButton url="/courses" title="Browse All Courses" />
              <LinkButton url="/request" title="Request A Course" />
              <LinkButton url="/contact" title="Contact" />
              <LinkButton url="/about" title="About" />

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
                        <Link to="/profile">
                          <Button colorScheme={'yellow'}>Profile</Button>
                        </Link>
                        <p>OR</p>

                          <Button colorScheme={'yellow'} onClick={logoutHandler}> <RiLogoutBoxLine />Logout</Button>
                 
                      </HStack>
                      {
                        user && user.role === 'admin' && <Link to="/admin/dashboard">
                            <Button>
                                <RiDashboardFill />
                                Dashboard
                            </Button>
                        </Link>
                      }
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/signup">
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
