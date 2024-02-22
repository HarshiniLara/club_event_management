import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Countdown from "../../components/Widgets/Countdown";
import Sidebar from "../../components/Widgets/Sidebar";
import { MdLocationPin } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { useSelector } from "react-redux";

const ViewEvent = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const user = useSelector((state) => state.auth.user);

  const deleteEvent = () => {
    axios
      .delete(`https://event-flow.onrender.com/events/${params.id}`)
      .then((response) => {
        window.alert("This event is removed successfully!");
        navigate("/dashboard");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

  useEffect(() => {
    axios
      .get(`https://event-flow.onrender.com/events/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setEvent(response.data);
      })
      .catch((error) => {
        window.alert(error.message);
        navigate("/dashboard");
      });
  }, []);

  return (
    <div className="flex flex-row">
      <Sidebar />
      {event != null ? (
        <main className="p-5 h-[100vh] overflow-scroll  bg-gray-100 flex-1 flex flex-col gap-6">
          <div>
            <img
              className="rounded-lg w-[80vw] h-[40vh] p-2 border-solid border-4 border-gray-300"
              src={event.imageUrl}
            />
          </div>

          <div>
            <p className="text-2xl font-bold">{event.title}</p>
            <p className="text-xl text-gray-500">{event.description}</p>
          </div>
          <div className="flex flex-row gap-10 items-center">
            <div className="flex items-center gap-2">
              <MdLocationPin className="w-10 h-10 text-[#4A096D]" />
              <div>
                <p className="text-sm font-medium ">{event.address}</p>
                <p className="text-sm font-medium ">{event.pincode}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AiFillCalendar className="w-10 h-10 text-[#4A096D]" />
              <div>
                <p className="text-sm font-medium ">
                  {new Date(event.datetime).toLocaleDateString()}
                </p>
                <p className="text-sm font-medium ">
                  {new Date(event.datetime).toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className="flex flex-1"></div>
            {user._id == event.organizer_id ? (
              <div className="flex flex-row">
                <button
                  className="bg-yellow-400 px-4 py-2 rounded shadow"
                  onClick={() => navigate(`/event/edit/${params.id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 px-4 py-2 text-white rounded shadow"
                  onClick={() => deleteEvent()}
                >
                  Delete
                </button>
              </div>
            ) : (
              <button
                className="bg-blue-900 text-white px-4 py-2 rounded shadow"
                onClick={() => alert("Not yet implemented!")}
              >
                Enroll
              </button>
            )}
          </div>
          <div>
            {event != null ? <Countdown time={event.datetime} /> : null}
          </div>
        </main>
      ) : null}
    </div>
  );
};

export default ViewEvent;
