import React from 'react';
import {
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
  RiAddCircleFill,
} from 'react-icons/ri';
import { HStack, Button, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Sidebar = () => {
  const location = useLocation();
  return (
    <HStack
    spacing='12%'
    direction={['column', 'row']}
    p="2%"
    >
      <Center>
      <LinkButton  Icon={RiDashboardFill} text="Dashboard" url={'dashboard'} active={location.pathname==='admin/dashboard'}/>
      <LinkButton Icon={RiEyeFill} text="Create Course" url={'createcourse'} active={location.pathname==="admin/createcourse"}/>
      <LinkButton Icon={RiAddCircleFill} text="Courses" url={'courses'} active={location.pathname==="admin/courses"}/>
      <LinkButton Icon={RiUser3Fill} text="User" url={'users'} active={location.pathname==="admin/users"}/>
      </Center>
    </HStack>
  );
};
export default Sidebar;


function LinkButton({ url, Icon, text, active }) {
  return (
   
     <Link to={`/admin/${url}`} p="2%" >
      <Button
        fontSize={'larger'}
        variant="ghost"
        colorScheme={active ? 'purple' : ''}
        w="300px"
      >
        <Icon style={{ margin: '4px' }} />
       {text}
      </Button>
    </Link>
  );
}
