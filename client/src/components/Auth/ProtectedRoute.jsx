import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { pathname } = useLocation();

  const isAuth =
    !!localStorage.getItem('isAuth') && !!localStorage.getItem('userData');
  if (isAuth) {
    return <>{children}</>;
  }
  return <Navigate to="/login" replace state={{ referrer: pathname }} />;
}
