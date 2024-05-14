import React from "react";
import Item from "../Item/Item";
import Caps from "../Assets/caps.png";

const Popular = (props) => {
  const localItemData = [
    {
      id: 1,
      name: "CAPS",
      image: Caps,
    },
  ];
  return (
    // <div>
    //   <div className="max-w-4xl mx-auto text-center">
    //     <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
    //       Discover Our Categories
    //     </h1>
    //     <hr className="mb-6" />
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       {props.data.slice(0, 1).map((item, i) => {
    //         return (
    //           <Item
    //             key={i}
    //             id={item.id}
    //             neck={item.neck}
    //             image={item.image}
    //             name={item.name.toUpperCase()}
    //           />
    //         );
    //       })}
    //       {localItemData.map((item, index) => (
    //         <Item
    //           key={index}
    //           id={item.id}
    //           image={item.image}
    //           name={item.name}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="max-w-4xl mx-auto text-left">
        <h1 className="text-lg md:text-2xl font-bold text-white mb-4 flex justify-center">
          Discover Our Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-64 w-96">
          {props.data.slice(0, 1).map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                neck={item.neck}
                image={item.image}
                name={item.name.toUpperCase()}
              />
            );
          })}
          {localItemData.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
