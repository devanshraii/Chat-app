import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    try {
      setLoading(true);
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/signup",
        {
          fullname,
          username,
          password,
          confirmPassword,
          gender,
        }
      );
      if (res.error) throw new Error(res.error);
      dispatch(setUser(res.data));
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;
