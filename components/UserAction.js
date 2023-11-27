import React, { useState } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  FaArrowRightToBracket,
  FaArrowRightFromBracket,
} from "react-icons/fa6";

import "@/styles/UserAction.scss";

const UserAction = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleLogin = () => {
    window.location.href = "/api/auth/login";
  };

  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  return (
    <div className="user-action-wrapper">
      {user ? (
        <div className="log-in">
          <Image
            id="user-profile"
            src={user.picture}
            alt={user.email}
            width={32}
            height={32}
          />
          <FaArrowRightFromBracket
            id="user-logout-icon"
            onClick={handleLogout}
          />
        </div>
      ) : (
        <div className="log-out" onClick={handleLogin}>
          <FaArrowRightToBracket id="user-login-icon" />
          <span>Login</span>
        </div>
      )}
    </div>
  );
};

export default UserAction;
