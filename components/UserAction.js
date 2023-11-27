"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  FaArrowRightToBracket,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import sessionService from "@/services/session";

import "@/styles/UserAction.scss";

const UserAction = () => {
  const [requestToken, setRequestToken] = useState("");
  const { user, error, isLoading } = useUser();

  const searchParams = useSearchParams();
  const requestTokenParams = searchParams.get("request_token");
  const approved = searchParams.get("approved");

  const handleGetRequestToken = async () => {
    try {
      const requestTokenResponse = await sessionService.getTMDBRequestToken();

      if (requestTokenResponse.success) {
        setRequestToken(requestTokenResponse.request_token);
        handleApproveRequestToken(requestTokenResponse.request_token);
      }
    } catch (error) {
      console.error("Unexpected error during get request token", error);
    }
  };

  const handleApproveRequestToken = async (requestToken) => {
    const redirectUrl =
      process.env.NODE_ENV === "production"
        ? "https://artaro-movie-db.vercel.app"
        : "http://localhost:3000";

    window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${encodeURIComponent(
      redirectUrl
    )}`;
  };

  const handleCreateSession = async (requestToken) => {
    try {
      const createSessionResponse = await sessionService.createTMDBSession(
        requestToken
      );

      console.log(
        "🚀 🔸 file: UserAction.js:53 🔸 createSessionResponse:",
        createSessionResponse
      );

      // return createSessionResponse;
    } catch (error) {
      console.error("Unexpected error during session creation:", error);
      return false;
    }
  };

  const handleLogin = async () => {
    await handleGetRequestToken();
    if (requestToken) {
      handleApproveRequestToken();
    }
  };

  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  useEffect(() => {
    console.log("lol", { requestToken, requestTokenParams, approved });
    if (requestTokenParams === requestToken && approved) {
      console.log("yey");
      handleCreateSession(requestToken);
    }
  }, [requestToken, requestTokenParams, approved]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
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
