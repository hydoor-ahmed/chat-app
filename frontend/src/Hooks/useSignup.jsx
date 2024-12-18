import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      });
      const data = await res.json();
      if(data.error) {
        throw new Error(data.error);
      }

      // ? LocalStorage
      localStorage.setItem("chat-user", JSON.stringify(data));

      // ? Context
      setAuthUser(data);
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };


  return { signup, loading };
};

export default useSignup;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please Fill All Fields.");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords Don't Match.");
    return false;
  }

  if (password.length < 8) {
    toast.error("Password Must Be At Least 8 Characters Long.");
    return false;
  }

  return true;
};
