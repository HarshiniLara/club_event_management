import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Widgets/Sidebar";
import { setActive } from "../../redux/slices/navSlice";
import FileBase from "react-file-base64";
import { GiHammerBreak, GiPublicSpeaker, GiHealthNormal } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { FaWalking, FaMusic } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { TbMilitaryRank } from "react-icons/tb";
import { MdSportsMartialArts } from "react-icons/md";
import axios from "axios";
import Select from "react-select";
import SelectLabel from "../../components/common/SelectLabel";
const AddEvent = () => {
  const id = useSelector((state) => state.auth.user._id) || "";

  const [eventData, setEventData] = useState({
    organizer_id: id.toString(),
    title: "",
    category: "",
    topic: "",
    n_participants: 1,
    description: "",
    address: "",
    pincode: "",
    imageUrl: "",
    datetime: null,
  });

  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(setActive("/event/book"));

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    } else {
      setEmail(user.email);
    }
  }, [isSignedIn]);

  const options = [
    {
      value: "Technical",
      label: (
        <SelectLabel color="red-600" Icon={GiHammerBreak} text="Technical" />
      ),
    },
    {
      value: "Non-Technical",
      label: (
        <SelectLabel
          color="blue-600"
          Icon={TbMilitaryRank}
          text="Non-Technical"
        />
      ),
    },
    {
      value: "other",
      label: (
        <SelectLabel color="yellow-600" Icon={FiMoreHorizontal} text="Other" />
      ),
    },
  ];

  const topicOptions = [
    {
      value: "Association",
      label: (
        <SelectLabel
          color="red-600"
          Icon={GiPublicSpeaker}
          text="Association"
        />
      ),
    },
    {
      value: "overall-club",
      label: (
        <SelectLabel color="blue-600" Icon={GrTechnology} text="Overall Club" />
      ),
    },
    {
      value: "sports",
      label: (
        <SelectLabel
          color="green-600"
          Icon={MdSportsMartialArts}
          text="Sports"
        />
      ),
    },
    {
      value: "nss",
      label: (
        <SelectLabel color="orange-600" Icon={GiHealthNormal} text="NSS/ NCC" />
      ),
    },
    {
      value: "shrishti",
      label: <SelectLabel color="pink-600" Icon={FaMusic} text="Shrishti" />,
    },
    {
      value: "other",
      label: (
        <SelectLabel color="yellow-600" Icon={FiMoreHorizontal} text="Other" />
      ),
    },
  ];

  const postData = async () => {
    axios
      .post("https://event-flow.onrender.com/events", [eventData])
      .then(function (response) {
        navigate("/dashboard");
      })
      .catch(function (error) {
        window.alert(error);
      });
  };

  return (
    <div className="flex flex-row ">
      <Sidebar />
      <main className="p-5 h-[100vh] overflow-scroll  bg-gray-100 flex-1 flex flex-col gap-6">
        <p className="font-bold">Book New Event</p>
        <input
          type="text"
          onChange={(e) =>
            setEventData({ ...eventData, title: e.target.value })
          }
          className="px-4 py-6 text-white rounded  w-full text-3xl bg-[#4A096D]"
          placeholder="| Your Event Title Goes Here..."
        />

        <div className="flex flex-row items-center justify-between">
          <DropDown
            heading="CATEGORY"
            options={options}
            eventData={eventData}
            setEventData={setEventData}
          />
          <DropDown
            heading="TOPIC"
            options={topicOptions}
            eventData={eventData}
            setEventData={setEventData}
          />
          <NParticipants
            heading="MAX PARTICIPANTS"
            eventData={eventData}
            setEventData={setEventData}
          />
        </div>

        <TextField
          heading="DESCRIPTION"
          eventData={eventData}
          setEventData={setEventData}
        />

        <div className="flex flex-row gap-10 items-center justify-between">
          <DateTime
            heading="DATE & TIME"
            eventData={eventData}
            setEventData={setEventData}
          />
          <Text
            className="flex-1 "
            heading="VENUE"
            eventData={eventData}
            setEventData={setEventData}
          />
        </div>

        <Image
          heading="IMAGE"
          eventData={eventData}
          setEventData={setEventData}
        />

        <div className="flex w-full justify-end">
          <input
            type="button"
            onClick={() => postData()}
            className="px-1 py-3 text-white rounded w-64  bg-[#4A096D]"
            value="SUBMIT"
          />
        </div>
      </main>
    </div>
  );
};

const DropDown = ({ heading, options, eventData, setEventData }) => {
  return (
    <div>
      <p className="text-gray-500 text-sm">{heading}</p>
      <Select
        onChange={(option) => {
          const event = eventData;

          event[heading.toLowerCase()] = option.value;
          setEventData(event);
        }}
        className="w-96 my-2 shadow bg-white"
        options={options}
      ></Select>
    </div>
  );
};

const NParticipants = ({ heading, eventData, setEventData }) => {
  return (
    <div>
      <p className="text-gray-500 text-sm">{heading}</p>
      <input
        className="w-96 border-2 border-solid border-blue-gray-200 p-1 py-2 rounded shadow "
        type="number"
        value={eventData.n_participants}
        onChange={(e) =>
          setEventData({ ...eventData, n_participants: e.target.value })
        }
      />
    </div>
  );
};

const Pincode = ({ heading, eventData, setEventData }) => {
  return (
    <div>
      <p className="text-gray-500 text-sm">{heading}</p>
      <input
        className="w-96 border-2 border-solid border-blue-gray-200 p-1 py-2 rounded shadow "
        type="number"
        value={eventData.pincode}
        onChange={(e) =>
          setEventData({ ...eventData, pincode: e.target.value })
        }
      />
    </div>
  );
};

const TextField = ({ heading, eventData, setEventData }) => {
  return (
    <div>
      <p className="text-gray-500 text-sm">{heading}</p>
      <textarea
        rows={8}
        className="w-full m-2 border-2 border-solid border-blue-gray-200 p-1 py-1.5 rounded shadow"
        value={eventData.description}
        onChange={(e) =>
          setEventData({ ...eventData, description: e.target.value })
        }
      />
    </div>
  );
};

const Text = ({ heading, eventData, setEventData }) => {
  return (
    <div className="w-full">
      <p className="text-gray-500 text-sm">{heading}</p>
      <input
        type="text"
        className=" w-full m-2 border-2 border-solid border-blue-gray-200 p-1 py-1.5 rounded shadow"
        value={eventData.address}
        onChange={(e) =>
          setEventData({ ...eventData, address: e.target.value })
        }
      />
    </div>
  );
};

const DateTime = ({ heading, eventData, setEventData }) => {
  return (
    <div className="w-full">
      <p className="text-gray-500 text-sm">{heading}</p>
      <input
        type="datetime-local"
        className=" w-full m-2 text-gray-400 border-2 border-solid border-blue-gray-200 p-1 py-1.5 rounded shadow"
        value={eventData.datetime}
        onChange={(e) =>
          setEventData({ ...eventData, datetime: e.target.value })
        }
      />
    </div>
  );
};

const Image = ({ heading, eventData, setEventData }) => {
  const [image, setImage] = useState(eventData.imageUrl);
  return (
    <div className="w-full">
      <p className="text-gray-500 text-sm">{heading}</p>
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
          setEventData({ ...eventData, imageUrl: base64 });
        }}
      />
      <img
        alt="Upload Photo"
        type="text"
        src={image}
        className=" w-1/2 h-[50vh] m-2 border-2 border-solid border-blue-gray-200 p-1 py-1.5 rounded shadow"
        value={image}
      />
    </div>
  );
};

export default AddEvent;
