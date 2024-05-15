import React, { useContext } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import { useParams } from "react-router-dom";

const Product = () => {
  const { products } = useContext();
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));
  console.log(product);
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
    </div>
  );
};

export default Product
