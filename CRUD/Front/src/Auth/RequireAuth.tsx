import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const RequireAuth = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!auth.user) navigate("/");
  }, [auth.user, navigate]);
  return (
    <>
      <Outlet />
    </>
  );
};
