import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/public/Homepage'
import LoginPage from "./pages/public/LoginPage";
import SignupPage from "./pages/public/SignupPage";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Dashboard from './pages/app/Dashboard'
import SignupSuccess from "./pages/public/SignupSuccess";
import ProtectedRoute from "./components/ProtectedRoute";
import Settings from "./pages/app/Settings"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          
          <Route path="/signup-success" element={<SignupSuccess />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;