import React from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

interface LayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen lg:flex">
      <SideNav />
      <main className="flex-1 lg:ml-[250px] ">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default MainLayout;

// flex-1 flex-col items-center justify-center px-20 text-center
