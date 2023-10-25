import React from 'react';
import {
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
  RiAddCircleFill,
} from 'react-icons/ri';
import { VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      spacing={'8'}
      p="16"
      boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'}
      minH={'100vh'}
    >
      <LinkButton Icon={RiDashboardFill} text="Dashboard" url={'dashboard'} active={location.pathname === 'admin/dashboard'} />
      <LinkButton Icon={RiEyeFill} text="Create Course" url={'createcourse'} active={location.pathname === "admin/createcourse"} />
      <LinkButton Icon={RiAddCircleFill} text="Courses" url={'courses'} active={location.pathname === "admin/courses"} />
      <LinkButton Icon={RiUser3Fill} text="User" url={'users'} active={location.pathname === "admin/users"} />
    </VStack>
  );
};
export default Sidebar;

function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        fontSize={'larger'}
        variant="ghost"
        colorScheme={active ? 'purple' : ''}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}