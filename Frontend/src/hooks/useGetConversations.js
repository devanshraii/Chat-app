import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const getConversations = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/users",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (data.error) throw new Error(data.error);
        setConversations(data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, [user.token]);

  return { loading, conversations };
};

export default useGetConversations;
