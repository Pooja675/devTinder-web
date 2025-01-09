import React from "react";

const UserCard = ({user}) => {
    const {firstName, lastName, photoUrl, age, gender, about} = user;
    //console.log(user)
  return (
    <div className="card bg-base-300 w-96 h-1/2 shadow-xl my-36">
      <figure>
        <img
          src={photoUrl}
          alt="user-photo"
          className="w-60 my-5 rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
        <button className="btn btn-secondary">Interested</button>
          <button className="btn btn-primary">Ignore</button>
          
        </div>
      </div>
    </div>
  );
};

export default UserCard;
