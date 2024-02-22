import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Widgets/Sidebar";
import { setActive } from "../../redux/slices/navSlice";
import axios from 'axios'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'

const Nearby = () => {

    const isSignedIn = useSelector(state => state.auth.isSignedIn);
    const user = useSelector(state => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setActive('/event/nearby'))

    const [email, setEmail] = useState("");

    useEffect(()=>{
        if(!isSignedIn){
          navigate('/');
        }
        else{
            setEmail(user.email);
        }
      }, [isSignedIn]);


    const [events, setEvents] = useState([])
    const [pincode, setPincode] = useState(user.pincode)
    console.log(user)
    
    useEffect(()=>{
        if(pincode!=null){
            if(pincode.length==6){
                axios.get(`http://localhost:4000/events/nearby/${pincode}`)
              .then(response => {
                console.log(response.data)
                setEvents(response.data)
              })
              .catch(error => {
                window.alert(error.message);
                console.log(error)
              })
             }
             else{
                setEvents([])
             }
        }
     
      
    },[pincode])

    
    

    return (
    <div className="flex flex-row ">
        <Sidebar />

        <main className="p-5 h-[100vh] overflow-scroll  bg-gray-100 flex-1 flex flex-col gap-6">
          <p className=" text-3xl text-black text-right my-4"> Hello <span className="text-[#4A096D] font-bold"> {user.name} </span> !</p> 

         <div><input type="text" className="p-2 w-full" value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder="Enter your pincode" /></div>

          <p className="font-bold">Events Happening Near you..</p>

          <div className="flex flex-row gap-5 flex-wrap">
          {events.map((e)=> <EventCard key={e._id} event={e}/>)}

          </div>



        </main>

    </div>
    )
}

function truncate(input) {
  if (input.length > 60) {
     return input.substring(0, 60) + '...';
  }
  return input;
};


const getDays = (datetime) => {

  const eventDate = new Date(datetime)
  const currentDate = new Date()

  console.log(eventDate)

  const diff_in_days =  (eventDate.getTime() - currentDate.getTime()) / (1000*3600*24)  

  return diff_in_days

}

const colorThemes = [
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const EventCard = ({ event }) => {
  const randomIndex = Math.floor(Math.random() * colorThemes.length);
  const colorTheme = colorThemes[randomIndex];
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col p-5 w-72 h-72  rounded-lg bg-${colorTheme}-500`}>
      <p className={`font-semibold text-${colorTheme}-500 px-2 py-1 my-1 bg-white   rounded text-sm `}>
        {event.topic!=null?event.topic.toUpperCase():"OTHER"}
      </p>

      <p className={`font-bold text-white p-2 text-${colorTheme}-500`}>{event.title}</p>

      <p className="text-md flex-1 text-gray-200 p-2">{event.description!=null?truncate(event.description):"This event has no description"}</p>

      <div className=" flex p-2 flex-row items-center justify-between">
        <p className="text-white">In {parseInt(getDays(event.datetime))} days</p>

        <BsFillArrowRightSquareFill onClick={()=>navigate(`/event/${event._id}`)
        } className="w-10 h-10  text-white hover:text-gray-400" />
      </div>
    </div>
  );
};


export default Nearby