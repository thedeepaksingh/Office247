"use client";

import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Sign In</h1>
      <p className="text-lg mb-8">Please sign in to continue.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
