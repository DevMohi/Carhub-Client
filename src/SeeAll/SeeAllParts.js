import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PartsCard from "../Home/PartsCard";
import Loading from "../Shared/Loading";

const SeeAllParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("https://carhub-server.onrender.com/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div className="mb-20">
      <h1 className="text-5xl text-secondary-focus text-center my-10">
        All Parts
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5  mt-10 mb-0 ">
        {parts.length === 0 ? (
          <Loading />
        ) : (
          parts.map((part) => (
            <PartsCard key={part._id} part={part}></PartsCard>
          ))
        )}
      </div>
    </div>
  );
};

export default SeeAllParts;
