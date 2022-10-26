import React from "react";
import { useLoaderData } from "react-router-dom";

const CheekOut = () => {
  const cheekOutDetails = useLoaderData();
  const { name, price,id } = cheekOutDetails;
  return (
    <div className="h-screen flex  align-middle items-center justify-center">
      <div className="card w-96 h-72 bg-base-100 text-center shadow-xl flex text-gray-800  align-middle items-center justify-center ">
        <h2 className="text-2xl text-green-700">
          Coungratualation !! You get our premium course.
        </h2>
        <h5 className="text-2xl">Course Id : {id}</h5>
        <h5 className="text-3xl">Course Name : {name}</h5>
        <p className="text-2xl">Price : ${price}</p>
      </div>
    </div>
  );
};

export default CheekOut;
