import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const { token, roles } = useSelector((state: any) => state.auth);

  if (!token) return <Outlet />;

  if (roles?.includes("admin")) return <Navigate to="/admin" replace />;
  if (roles?.includes("learner")) return <Navigate to="/learner" replace />;

  return <Navigate to="/unauthorized" replace />;
};


export default PublicRoute;