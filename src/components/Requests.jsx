import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utils/requestSLice'

const Requests = () => {

    const requests = useSelector((store) => store.requests)
    const dispatch = useDispatch();

    const fetchRequests = async () => {

        try {

            const res = await axios.get(BASE_URL + "/user/request/received", {withCredentials: true})
            dispatch(addRequests(res.data.data))
            
        } catch (error) {
            
        }
    };

    useEffect(() => {
        fetchRequests()
    }, []) 

    if (!requests) return;

    if (requests.length === 0) return <div>No Requests found</div>;
  
    return (
      <div className="text-center my-10">
        <h1 className="font-bold text-2xl">Connections Requests</h1>
  
        {requests.map((request) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;
  
          return (
            <div key= {_id} className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto">
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

              <div>
              <button className="btn btn-primary mx-3">Reject</button>
              <button className="btn btn-secondary mx-3">Accept</button>
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default Requests