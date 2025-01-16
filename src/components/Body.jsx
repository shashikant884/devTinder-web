import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const fatchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispach(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (!userData) {
      fatchUser();
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Body;
