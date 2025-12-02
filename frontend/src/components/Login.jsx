import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import axioInstance from "../api/AxiosInstance";
import toast from "react-hot-toast";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  
const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response=await axioInstance.post("/login/",{
        username,
        password,
      });
      console.log(response.data,"Response")
      localStorage.setItem("ACCESS_TOKEN",response.data.access);
      localStorage.setItem("REFRESH_TOKEN",response.data.refresh);
      toast.success("Login Successful");
      navigate("/dashboard");
    } catch(error){

      console.log(error);
      toast.error(error.response?.data?.detail || "Login failed");
    }
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
          <img className="mx-auto h-20 w-auto" src={logo} alt="Arcite logo" />
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Login</h2>

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
              Login
            </button>
          </form>

          <p className="text-center text-sm font-semibold text-gray-900 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-teal-600 hover:underline">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}