import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 mx-auto my-4 max-w-md flex flex-col">
      <img src={props.image} alt="Image" className="w-full h-auto" />
      <div className="p-4 flex-grow">
        <div className="flex flex-col h-full justify-between">
          <p className="text-gray-600 mb-2">{props.name}</p>
          <Link to={`/preform`}>
            <button className="block w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              CLICK TO VIEW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
