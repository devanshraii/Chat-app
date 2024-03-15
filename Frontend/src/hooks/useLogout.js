import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../features/auth/authSlice";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/logout"
      );
      if (res.data.error) {
        throw new Error(res.data.error);
      }
      dispatch(clearUser());
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
