import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface PrivateRouteProps {
  children?: React.ReactElement;
  role?: string | string[];
}

const PrivateRoute = ({ role }: PrivateRouteProps) => {
  const { token, roles } = useSelector((state: any) => state.auth);

  console.log("----- PRIVATE ROUTE -----");
  console.log("Required role:", role);
  console.log("User roles:", roles);
  console.log("Token:", token);

  if (!token) {
    console.log("Redirect -> /login");
    return <Navigate to="/login" replace />;
  }

  if (role && !roles.includes(role)) {
    console.log("Redirect -> /unauthorized");
    return <Navigate to="/unauthorized" replace />;
  }

  console.log("Access granted");
  return <Outlet />;
  
};


export default PrivateRoute;