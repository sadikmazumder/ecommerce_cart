import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  //In order to get the access of of product - which is in tge Redux store'v--- > We are make the use of useSelector
  // useSelector takes an arguments of an State --- > It going to return as a State

  const products = useSelector((state) => state);

  // Create a function , which is going to be fatch all the products
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response);
  };
  console.log(products);

  return (
    <div className="ui grid container ">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
