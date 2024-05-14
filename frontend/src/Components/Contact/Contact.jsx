// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// // import Product from "../../Pages/Product";

// const Contact = ({ product }) => {
//   const [message, setMessage] = useState("");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/allproducts`);
//         const data = await response.json();

//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const onChange = (e) => {
//     setMessage(e.target.value);
//   };

//   return (
//     <>
//       <div>
//         <div className="flex flex-col gap-2">
//           <p>
//             Contact{" "}
//             <span className="font-semibold">Lishanth PET Industries</span>
//             {/* <span className="font-semibold">{products.name}</span> */}
//           </p>
//           <textarea
//             name="message"
//             id="message"
//             rows="2"
//             value={message}
//             onChange={onChange}
//             placeholder="Enter your message here..."
//             className="w-full border p-3 rounded-lg"
//           ></textarea>

//           <Link
//             to={`mailto:${"sanjeevrathan4444@gmail.com"}?subject=Regarding ${
//               product.name
//             } &body=${message}`}
//             className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
//           >
//             Send Message
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-semibold"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
