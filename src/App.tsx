import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DownloadPage from "./pages/DownloadPage";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;