"use client";
import React from "react";
import LoginForm from "./_form/LoginForm";

const Login = () => {
  return (
    <div className="md:w-8/12 flex items-center justify-center h-screen">
      <div className="w-9/12 xl:max-w-lg mx-4 m-auto p-6 bg-white rounded-lg">
        <h5 className="font-medium">Welcome to TradeFull connect</h5>
        <h1 className="text-3xl">Connect with customers</h1>
        <p className="text-base-secondary-400 text-sm font-medium leading-tight py-2">
          Build strong connections with customers to enhance brand loyalty and
          drive business growth.
        </p>
        {/* LOGIN FORM */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
