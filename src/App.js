import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./pages/landPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "./pages/galleryPage";
import AboutMe from "./pages/aboutPage";
import Messages from "./pages/dashboard/messagePage";
import AllMessages from "./pages/dashboard/messagePage/allMessage/AllMessages";
import ViewMsg from "./pages/dashboard/messagePage/viewMsg/ViewMsg";
import DisplayDashboard from "./pages/dashboard/mainpage";
import AddImg from './pages/dashboard/galleryDash/index';
import GalleryDash from './pages/dashboard/galleryDash/GalleryDash';
import OverView from "./pages/dashboard/overView/Overview";
import LogAdmin from "./pages/adminForm/LogAdmin";
import { useSelector } from "react-redux";

function App() {
  // Handling the menu bar
  const [openMenu, setOpenMenu] = useState(false);

  const handleSideMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Checking for token
  const token = useSelector((state) => state.user.logged.token);
  console.log(token)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="gallery" element={<Gallery />} />
          <Route
            path={"dashboard"}
            element={<DisplayDashboard
              openMenu={openMenu}
              handleSideMenu={handleSideMenu}
            />
            }
          >
            <Route
              index
              element={
                <OverView
                  openMenu={openMenu}
                  handleSideMenu={handleSideMenu}
                />
              }
            />
            <Route
              path="messages"
              element={
                <Messages
                  openMenu={openMenu}
                  handleSideMenu={handleSideMenu}
                />
              }
            >
              <Route index element={<AllMessages />} />
              <Route path=":id" element={<ViewMsg />} />
            </Route>
            <Route
              path="addImg"
              element={
                <AddImg
                  openMenu={openMenu}
                  handleSideMenu={handleSideMenu}
                />
              }
            >
              <Route index element={<GalleryDash />} />
            </Route>
          </Route>
          <Route path="admin" element={<LogAdmin />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
