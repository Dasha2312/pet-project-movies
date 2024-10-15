
import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import { useAuth } from "../store/Auth/useAuth";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();
  const { fetchUser } = useAuth();

  useEffect(() => {
    fetchUser(); // Вызываем fetchUser при монтировании компонента Layout
  }, []);

  const isHomePage = location.pathname == '/' || location.pathname == '/home';
  return (
    <>
      <Header classBlock={isHomePage ? 'homePage' : ''} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;