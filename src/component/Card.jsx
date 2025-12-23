import { FaCheck, FaTimes, FaEdit, FaSadTear } from "react-icons/fa";
import React from "react";

const Card = ({ data , onComplete , id , onDelete , onEdit}) => {
  return (
    <div
      className="w-56 h-40 p-3 shadow-lg rounded-sm hover:scale-105 transition-transform duration-200 flex flex-col"
      style={{
        backgroundColor: data.color,
        transform: `rotate(${data.rotate}deg)`,
      }}
    >
      {data.isCompleted && <div className="completd h-10 w-10 rounded-full bg-green-600"></div>}
      <h3 className="font-bold text-center mb-2 h-2/3 text-2xl">{data.text}</h3>
      <div className="flex w-full gap-3 justify-center">
        <FaCheck className="bg-green-700 rounded text-white p-3 text-5xl hover:scale-110 duration-75" onClick={onComplete}/>
        <FaTimes className="bg-red-700 rounded text-white p-3 text-5xl hover:scale-110 duration-75 " onClick={onDelete}/>
        <FaEdit className="bg-blue-700 rounded text-white p-3 text-5xl hover:scale-110 duration-75 " onClick={onEdit}/>
      </div>
    </div>
  );
};


export default Card