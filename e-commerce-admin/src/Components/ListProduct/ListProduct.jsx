// import React, { useEffect, useState } from "react";
// import "./ListProduct.css";
// import cross_icon from '../Assets/cross_icon.png';

// const ListProduct = () => {
 
//   const [allproducts, setAllProducts] = useState([]);

//   const fetchInfo = () => { 
//     fetch('http://localhost:4000/allproducts') 
//             .then((res) => res.json()) 
//             .then((data) => setAllProducts(data));
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const removeProduct = async (id) => {
//     await fetch('http://localhost:4000/removeproduct', {
//       method: 'POST',
//       headers: {
//         Accept:'application/json',
//         'Content-Type':'application/json',
//       },
//       body: JSON.stringify({id:id}),
//     });

//     fetchInfo();
//   };

//   return (
//     <div className="listproduct">
//       <h1>All Products List</h1>
//       <table className="listproduct-table">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Products</th>
//             <th>Category</th>
//             <th>Liters</th>
//             <th>Neck</th>
//             <th>kg/pack</th>
//             <th>Remove</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allproducts.map((e, index) => (
//             <tr key={e.id} className = "listproduct-data">
//               <td>{index + 1}</td>
//               <td><img className="listproduct-product-icon" src={e.image} alt="" /></td>
//               <td className = "color">{e.category}</td>
//               <td>{e.liters}</td> {/* Corrected property name */}
//               <td>{e.neck}</td> {/* Corrected property name */}
//               <td>{e.kg_pack}</td> {/* Make sure this property exists in your data */}
//               <td><img className="listproduct-remove-icon" onClick={()=>{removeProduct(e.id)}} src={cross_icon} alt="" /></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListProduct;

import React, { useEffect, useState } from "react";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const removeProduct = async (id) => {
    try {
      await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: {
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({id}),
      });
      fetchProducts(); // Fetch products again after removing one
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">All Products List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl"
          >
            <img src={product.image} alt="product" className="w-full h-40 object-cover" />
            <div className="p-6 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">{product.name.toUpperCase()}</h2>
              <p className="text-lg text-gray-600 mb-2 whitespace-nowrap">Liters: {product.liters}</p>
              <p className="text-lg text-gray-600 mb-2">Neck: {product.neck}</p>
              <p className="text-lg text-gray-600 mb-4">Kg/Pack: {product.kg_pack}</p>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:shadow-xl"
                onClick={() => removeProduct(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;