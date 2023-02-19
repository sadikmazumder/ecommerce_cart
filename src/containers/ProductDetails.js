import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  // this will give the productID  and this will be comming from the useParams
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err ", err);
      });

    dispatch();
  };
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
};

export default ProductDetails;
