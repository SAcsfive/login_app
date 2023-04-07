import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CustomNavBar from './Components/CustomNavBar';
import ProtectedRoutes from './Components/RequireAuth';
import Profile from './pages/Profile';
import RequireAuth from './Components/RequireAuth';
import { AuthProvider } from './Components/Auth';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/about"
              element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route element={<ProtectedRoutes />} /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      {/* MUI */}
    </div>
  );
}

export default App;
