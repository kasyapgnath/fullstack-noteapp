import { useState } from "react";
import logo from "../assets/logo.jpg";
import {useNavigate} from "react-router-dom"
import axiosInstance from "../api/AxiosInstance";
import toast from "react-hot-toast"
function Register() {
  const navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/register/", {
        username,
        password,
      });
      toast.success(response.data.message || "registration successfull");
      navigate("/Login");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "registration failed")
    }
    console.log("Form submitted:", { username, password });
  };

  return (
    <div
      className="flex min-h-screen justify-center items-center bg-blue-50"
      style={{
        backgroundImage: ``,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}

    >
      <div className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden sm:max-w-sm sm:w-full">
        <div className="px-6 py-8">
          <img className="mx-auto h-20 w-auto" src={logo} alt="NotesApp logo" />
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md text-white bg-teal-600 hover:bg-teal-500"
            >
              Register
            </button>
          </form>

          {/* FIXED THIS PART */}
          <p className="text-center text-sm font-semibold text-gray-900 mt-4">
            Already have an account?{" "}
            <span className="font-medium text-teal-600 hover:underline">
              Login Here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;