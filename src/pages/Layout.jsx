
import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import { useSelector } from "react-redux";
import Modals from "../components/Modals/Modals";

function Layout() {
  const location = useLocation();
  const isModalOpen = useSelector(state => state.authModal.isOpen);

  const isHomePage = location.pathname == '/' || location.pathname == '/home';
  return (
    <>
      <Header classBlock={isHomePage ? 'homePage' : ''} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      {isModalOpen && <Modals />}
    </>
  );
}

export default Layout;