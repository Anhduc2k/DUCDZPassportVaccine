import React, { useEffect } from "react";
import { isAuthenticated } from "../handlers/authHandler";
import { Outlet, useNavigate } from "react-router-dom";
const AppLayout = () => {
  const navigate = useNavigate();
  //  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const res = await isAuthenticated();
      if (!res) return navigate("/login");
      setIsLoading(false);
    };
    checkToken();
  }, []);
  return <div>AppLayout</div>;
};

export default AppLayout;
