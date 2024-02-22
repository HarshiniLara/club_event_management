import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [year, setyear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleyearChange = (e) => {
    setyear(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      phone: phone,
      dob: dob,
      gender: gender,
      address: address,
      year: year,
      email: email,
      password: password,
    };

    axios
      .post("https://event-flow.onrender.com/user/register", user)
      .then((response) => {
        console.log(response);
        dispatch(login(response.data));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        window.alert(err.response.data);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2  px-6 py-12 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-black ">
          Join the Community!
        </h1>
        <form
          className="grid  grid-cols-2 gap-4  w-full max-w-screen-lg"
          onSubmit={handleSubmit}
        >
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full bg-gray-100 border-2 border-transparent rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="w-full bg-gray-100 border-2 border-transparent rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="tel"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className="w-full bg-gray-100 border-2 border-transparent rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="date"
              id="dob"
              placeholder="Date of Birth"
              value={dob}
              onChange={handleDobChange}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="w-full bg-gray-100 border-2 border-transparent rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              id="gender"
              value={gender}
              onChange={handleGenderChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="w-full bg-gray-100 border-2 border-transparent rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              id="address"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="year"
            >
              year
            </label>
            <input
              className="w-full bg-gray-100 border-2 border-transparent rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              id="year"
              placeholder="year"
              value={year}
              onChange={handleyearChange}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-100 border-2 border-transparent rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full bg-gray-100 border-2 border-transparent rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="col-span-full">
            <button
              className="w-full bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="text-gray-500 mt-6 text-center">
          Already a user?{" "}
          <Link to="/" className="text-purple-600 font-bold">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
