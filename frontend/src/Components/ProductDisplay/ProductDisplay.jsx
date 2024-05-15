import { Link } from "react-router-dom";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="productdisplay flex justify-between px-10">
      <div className="productdisplay-left flex gap-8">
        {/* <div className="productdisplay-img-list flex flex-col gap-4">
          <img src={product.image} alt="img" className="h-24 object-cover" />
          <img src={product.image} alt="img" className="h-24 object-cover" />
          <img src={product.image} alt="img" className="h-24 object-cover" />
          <img src={product.image} alt="img" className="h-24 object-cover" />
        </div> */}
        <div className="productdisplay-img">
          <img
            src={product.image}
            alt="img"
            className="h-72 object-cover pr-4"
          />
        </div>
      </div>
      <div className="productdisplay-right flex flex-col">
        <h1 className="text-gray-700 text-2xl font-bold mb-4">
          {product.name}
        </h1>
        <div className="productdisplay-right-prices flex gap-4 mb-4">
          <div className="text-red-500 text-lg font-semibold">
            {product.kg_pack}/P
          </div>
          <div className="text-red-500 text-lg font-semibold">
            {product.neck}
          </div>
        </div>
        <div className="productdisplay-right-description text-gray-600 text-base mb-4">
          A lightweight, often molded, preform container designed for use in
          various packaging applications, featuring a sturdy construction and
          compatibility with a range of bottling processes, commonly utilized in
          the beverage and packaging industries.
        </div>
        <div className="productdisplay-right-size mb-4">
          <h1 className="text-gray-700 text-lg font-semibold mb-2">
            Select Liters
          </h1>
          <div className="productdisplay-right-sizes flex gap-4">
            <div className="py-2 px-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">
              200 ML
            </div>
            <div className="py-2 px-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">
              300 ML
            </div>
            <div className="py-2 px-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">
              500 ML
            </div>
          </div>
        </div>
        <Link to={"/contact"}>
          <button
            className="productdisplay-right-button py-2 px-4 bg-red-500 text-white font-semibold rounded cursor-pointer"
            // onClick={() => {
            //   addToCart(product.id);
            // }}
          >
            CONTACT US
          </button>
        </Link>
        <p className="productdisplay-right-category mt-4 text-gray-700">
          <span className="font-semibold">Category:</span> PREFORM
        </p>
        {/* <Contact product={product} /> */}
      </div>
    </div>
  );
};

export default ProductDisplay;
