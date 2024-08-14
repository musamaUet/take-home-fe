import React from "react";

const NotFound = ({ title }) => {
  return (
    <div className="flex h-[75vh] flex-col justify-center items-center">
      <h2 className="h5 text-[2rem] text-center text-white mb-4">{title ?? "No Record Found"}</h2>
    </div>
  );
};

export default NotFound;
