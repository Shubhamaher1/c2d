import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Landing from "./components/landing/Landing";
// import Gallery from "./components/landing/Gallery";
import About from "./components/landing/About";
import Contact from "./components/landing/Contact";
// import Blog from "./components/landing/Blog";
import Our from "./components/landing/Our";
// import Home1 from "./Home";


function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
           <Route path="index" element={<Landing/>} />
           {/* <Route path="galley" element={<Gallery />} /> */}
           <Route path="about" element={<About/>} />
           <Route path="contact" element={<Contact />} />
           <Route path="room" element={<Our/>} />
           {/* <Route path="blog" element={<Blog/>} /> */}
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
