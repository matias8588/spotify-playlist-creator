import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";

export type ProtectedRouteProps = {
  children?: React.ReactNode;
};
const ProtectedRoute: FC = ({ children }: ProtectedRouteProps) => {
  const { user }: any = useAuth();

  /* if (loading) {
    <h1>loading....</h1>;
  } */
  console.log(user);

  if (!user) return <Navigate to={"/login"} />;
  return <>{children}</>;
};

export default ProtectedRoute;
