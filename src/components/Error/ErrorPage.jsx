import React from "react";

const ErrorPage = () => {
  return (
    <div class="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold text-slate-600">404</h1>
        <h3 className="text-2xl font-semibold text-slate-500">Something Wrong!</h3>
        </div>
        <img className="w-52" src="https://img.freepik.com/premium-vector/sad-boy-points-left-direction-cartoon-character-isolated-white-background_543062-605.jpg?w=2000" alt="" />
    </div>
  );
};

export default ErrorPage;
