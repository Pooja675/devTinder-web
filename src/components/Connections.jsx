import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  //console.log(connections)
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });
    //console.log(res.data.data);
    dispatch(addConnections(res.data.data));
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <div>No Connections found</div>;

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-2xl">Connections</h1>

      {connections.map((connection) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          connection;

        return (
          <div className="flex  m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
            <div>
              <img
                alt="photo"
                className="w-28 h-24 rounded-2xl"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-8">
              <h2 className="font-bold text-2xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
