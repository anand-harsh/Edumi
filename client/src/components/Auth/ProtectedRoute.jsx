import { Navigate, useLocation, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ isAdmin }) {
  const { pathname } = useLocation();
  const userData = JSON.parse(localStorage.getItem('userData'))?.User;

  const isAuth =
    !!localStorage.getItem('isAuth') && !!userData && isAdmin
      ? userData?.role === 'admin'
      : userData?.role === 'user';

  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace state={{ referrer: pathname }} />;
}
