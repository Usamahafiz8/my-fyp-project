import UserHeader from "@/components/UserHeader";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <UserHeader />
      {children}
    </div>
  );
}
