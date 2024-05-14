import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from "../Components/Popular/Popular";

const Shop = () => {
  const [popular, setPopular] = useState([]);
  // const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <Hero />
      <div className="absolute top-40 right-12">
        <div>
          <Popular data={popular} />
        </div>
      </div>
    </div>
  );
};

export default Shop
