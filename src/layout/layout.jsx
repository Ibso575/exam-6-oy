import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import MobileBottomNav from "../components/mobilepanel";
import Footer from "../components/footer";
import Service from "../components/service";

const MainLayout = () => {
  const location = useLocation();

  // Faqat asosiy sahifada ekanligimizni tekshiramiz
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Header hamma sahifada ko'rinadi */}
      <Header />

      <main>
        <Outlet />
      </main>

      {/* FAQAT HOME SAHIFASIDA KO'RINADI */}
      {isHomePage && <MobileBottomNav />}

      {/* BU IKKALASI BARCHA SAHIFALARDA KO'RINADI */}
      <Service />
      <Footer />
    </>
  );
};

export default MainLayout;