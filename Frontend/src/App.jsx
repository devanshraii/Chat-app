import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import NotFound from "./pages/NotFound";

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="p-4 h-[100dvh] w-full bg-transparent flex items-center">
      {/* <div className="p-4 h-screen flex items-center justify-center relative-to-content bg-transparent"> */}
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
