import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { verifyToken } from "../slices/userSlice";

const PrivateRoute = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.userInfo.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(verifyToken(token));
    }
  }, []);
  setTimeout(() => {
    setLoading(false);
  }, 500);

  if (loading) {
    return <h2>Loading....</h2>;
  }
  if (!user) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
