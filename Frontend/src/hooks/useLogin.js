import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import toast from "react-hot-toast";

const useLogin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const login = async ({ username, password }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/login",
        {
          username,
          password,
        }
      );
      if (data.error) throw new Error(data.error);
      toast.success("Welcome " + data.fullname);
      dispatch(setUser(data));
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
