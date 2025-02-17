import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login";
import Verify from "./Components/Verify";
import Dashboard from "./Components/Dashboard";
import ComponentMonitoring from "./Components/ComponentMonitoring";
import ComMonDetails from "./Components/ComMonDetails";
import ComMonDetails2 from "./Components/ComMonDetails2";
import ComMonDetails3 from "./Components/ComMonDetails3";
import DetailedSecurityLogs from "./Components/DetailedSecurityLogs";
import DetailedHoneypotAlert from "./Components/DetailedHoneypotAlert";


function App() {
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoginSuccessful(true);
  };

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex-col p-8 text-center">
              <div className="flex flex-col items-center mb-11">
                <img
                  src="src\assets\image (4).svg"
                  alt="logo"
                  width={350}
                  height={79}
                />
                <div className="text-white  font-light">
                  Secure Grids, Smarter Connections
                </div>
              </div>
              <div className="flex responsive">
                <div className="flex justify-center items-center space-x-4">
                  {" "}
                  {/* Flex container with centered items and space between them */}
                  <div className="p-4 flex-grow">
                    {" "}
                    {/* First item */}
                    <img
                      src="src\assets\My Video.gif"
                      alt="microgrid animation"
                    />
                  </div>
                  <div className="inline-block h-auto w-1 rounded-xl self-stretch bg-gray-500 opacity-100 dark:opacity-50"></div>{" "}
                  {/* Divider */}
                  <div className="flex-grow">
                    {" "}
                    {/* Second item */}
                    {!isLoginSuccessful ? (
                      <Login onLoginSuccess={handleLoginSuccess} />
                    ) : !isVerified ? (
                      <Verify
                        onVerificationSuccess={handleVerificationSuccess}
                      />
                    ) : (
                      <Navigate to="/dashboard" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ComponentMonitoring" element={<ComponentMonitoring />} />
        <Route path="/ComMonDetails" element={<ComMonDetails />} />
        <Route path="/ComMonDetails2" element={<ComMonDetails2 />} />
        <Route path="/ComMonDetails3" element={<ComMonDetails3 />} />
        <Route path="/DetailedSecurityLogs" element={<DetailedSecurityLogs/>} />
        <Route path="/DetailedHoneypotAlert" element={<DetailedHoneypotAlert/>} />
      </Routes>
    </Router>
  );
}

export default App;
