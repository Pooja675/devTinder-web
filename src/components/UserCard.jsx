import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeUserFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  //console.log(user)

  const dispatch = useDispatch()

  const handleSendRequest = async (status, userId) => {

    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFeed(userId))
      
    } catch (error) {
      //Handle this error
    }

  };

  return (
    <div className="card bg-base-300 w-96 h-1/2 shadow-xl my-32">
      <figure>
        <img src={photoUrl} alt="user-photo" className="w-60 my-5 rounded-md" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-secondary" onClick={() => handleSendRequest("interested", _id)}>Interested</button>
          <button className="btn btn-primary" onClick={() =>handleSendRequest("ignored", _id)} >Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
