import React, { useState } from "react";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    liters: "",
    neck: "",
    kg_pack: "",
  });

  const changeHandler = (e) => {
    if (e.target.name === "category") {
      setProductDetails({ ...productDetails, category: e.target.value, name: e.target.value });
    } else {
      setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const AddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("product", image);

      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        const product = {
          ...productDetails,
          image: data.image_url,
        };
        
        await fetch("http://localhost:4000/addproduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        
        alert("Product Added");
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="category">Product category</label>
          <select
            id="category"
            value={productDetails.category}
            name="category"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={changeHandler}
          >
            <option value="">Select category</option>
            <option value="preform">Preform</option>
            <option value="caps">Caps</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="name">Product name</label>
          <input 
            id="name"
            type="text"
            name="name"
            value={productDetails.name}
            readOnly // Set as readOnly to display category value
            placeholder="Choose a category"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {productDetails.category === "preform" && (
          <div className="flex flex-col">
            <label className="text-lg font-semibold" htmlFor="liters">Liters</label>
            <select
              id="liters"
              value={productDetails.liters}
              name="liters"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={changeHandler}
            >
              <option value="">Select liters</option>
              <option value="200-ML(clear)">200-ML(clear)</option>
              <option value="200-ML(clear)(short neck)">200-ML(clear)(short neck)</option>
              <option value="200-ML(green)">200-ML(green)</option>
              <option value="200-ML(milk white)">200-ML(milk white)</option>
              <option value="300-ML">300-ML</option>
              <option value="500-ML">500-ML</option>
              <option value="500-ML(clear)">500-ML(clear)</option>
              <option value="1-LTR">1-LTR</option>
              <option value="1-LTR(oil bottle)">1-LTR(oil bottle)</option>
              <option value="2-LTR">2-LTR</option>
              <option value="5-LTR">5-LTR</option>
              <option value="5-LTR(short)">5-LTR(short)</option>
              <option value="5-LTR(long)">5-LTR(long)</option>
            </select>
          </div>
        )}

        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="neck">Neck</label>
          <select
            id="neck"
            value={productDetails.neck}
            name="neck"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={changeHandler}
          >
            <option value="">Select Neck</option>
            <option value="ALASKA">ALASKA</option>
            <option value="1881">1881</option>
            <option value="26/22">26/22</option>
            <option value="LONG NECK">LONG NECK</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="kg_pack">Kg/Pack</label>
          <select
            id="kg_pack"
            value={productDetails.kg_pack}
            name="kg_pack"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={changeHandler}
          >
            <option value="">Select KG Per Pack</option>
            <option value="20 KG">20 KG</option>
            <option value="10 KG">10 KG</option>
            <option value="11 KG">11 KG</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="text-lg font-semibold" htmlFor="file-input">Product image</label>
          <label htmlFor="file-input">
            <img
              className="mt-1 w-32 h-auto border-2 border-gray-300 rounded-md shadow-sm"
              src={!image ? upload_area : URL.createObjectURL(image)}
              alt=""
            />
          </label>
          <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
        </div>
      </div>

      <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={AddProduct}>
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
