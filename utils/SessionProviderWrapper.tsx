"use client";
import React, { FC, PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

const SessionProviderWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
