import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProflieHome from "../../MAINPROFILE/ProflieHome ";

const Profile = () => {
  const location = useLocation();
  console.log(location.pathname);
  return <>{<ProflieHome />}</>;
};
export default Profile;
