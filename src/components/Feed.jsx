import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispach = useDispatch();
  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispach(addFeed(res.data));
      console.log(res);
    } catch (err) {}
  };
  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <div>
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
