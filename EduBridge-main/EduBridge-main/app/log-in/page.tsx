// pages/login.tsx
"use client";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve user records from localStorage
    const userRecords = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if there is a user with matching credentials
    const isUserValid = userRecords.some(
      (user: { userName: string; psw: string }) =>
        user.userName === userName && user.psw === password,
    );

    if (isUserValid) {
      alert("Login successful");
      const currentUser = userRecords.find(
        (user: { userName: string }) => user.userName === userName,
      );
      if (currentUser) {
        localStorage.setItem("name", currentUser.userName); // Store username
        localStorage.setItem("email", currentUser.email); // Store email
        window.location.href = "/design/home"; // Redirect to desired page
      }
    } else {
      alert("Login failed"); // Notify if login fails
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#4494ad] to-[#1d5391] p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <h1 className="text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b55f2e] to-[#1d5391]">
          LOGIN
        </h1>

        <form id="loginForm" onSubmit={loginUser} className="pt-8">
          <div className="flex mb-8">
            <div className="relative w-full mx-2">
              <input
                type="text"
                id="userName"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="block w-full h-10 border-b-2 border-gray-300 focus:outline-none focus:border-[#3498db] text-lg"
              />
              <label className="absolute bottom-2 left-0 text-gray-500 transition-all duration-300 transform origin-left">
                Username
              </label>
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#3498db] transition-all duration-300 transform scale-x-0 origin-left"></div>
            </div>

            <div className="relative w-full mx-2">
              <input
                type="password"
                id="psw"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full h-10 border-b-2 border-gray-300 focus:outline-none focus:border-[#3498db] text-lg"
              />
              <label className="absolute bottom-2 left-0 text-gray-500 transition-all duration-300 transform origin-left">
                Password
              </label>
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#3498db] transition-all duration-300 transform scale-x-0 origin-left"></div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="relative h-12 w-1/2 overflow-hidden rounded-lg bg-gradient-to-r from-[#4494ad] to-[#1d5391] text-white text-lg font-semibold transition-transform duration-400 transform hover:translate-x-0"
            >
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#1d5391] to-[#4494ad] -translate-x-full transition-transform duration-400"></span>
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
