import { Navigate, useLocation, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { pathname } = useLocation();

  const isAuth =
    !!localStorage.getItem('isAuth') && !!localStorage.getItem('userData');
  if (isAuth) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace state={{ referrer: pathname }} />;
}
