
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";


function App() {
  return (
    <Router>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/home" element={<ProtectedRoute><Home/> </ProtectedRoute>}/>
                <Route path="/" element={<Login/>} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
    </Router>
  );
}

export default App;