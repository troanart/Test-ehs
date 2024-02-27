import React from "react";

export default function Legend() {
  return (
    <div className=" flex p-2.5 justify-center items-baseline  ">
      <div className="flex justify-center items-center">
        <div className="bg-emerald-500 border rounded w-8 min-h-7 ml-5 mr-2"></div>
        <p>Online</p>
      </div>
      <div className="flex justify-center  items-center">
        <div className="bg-pink-500 border rounded w-8 min-h-7 ml-5 mr-2"></div>
        <p>Offline</p>
      </div>
    </div>
  );
}
