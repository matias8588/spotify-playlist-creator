import React, { FC } from "react";
import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  children?: React.ReactNode;
};
const ProtectedRoute: FC = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to={"/login"} />;
  return <>{children}</>;
};

export default ProtectedRoute;
