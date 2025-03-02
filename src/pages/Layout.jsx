
import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Sing_In_Up from "../components/Sing_In_Up/Sing_In_Up";

function Layout() {
  const location = useLocation();

  const isHomePage = location.pathname == '/' || location.pathname == '/home';
  return (
    <>
      <Header classBlock={isHomePage ? 'homePage' : ''} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <Sing_In_Up />
    </>
  );
}

export default Layout;