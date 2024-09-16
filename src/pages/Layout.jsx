
import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

function Layout() {
  const location = useLocation();

  const isHomePage = location.pathname == '/' || location.pathname == '/home';
  return (
    <>
      <Header classBlock={isHomePage ? 'homePage' : ''} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;