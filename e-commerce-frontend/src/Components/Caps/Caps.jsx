import React from "react";
import data from "../Assets/data.js";
import Item from "../Item/Item";

const Caps = () => {
  return (
    <div>
      <h1 className="p-4 font-bold text-4xl">Caps</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Item key={index} id={item.id} image={item.image} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Caps;
