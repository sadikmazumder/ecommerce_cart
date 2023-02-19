import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  //In order to get the access of of product - which is in tge Redux store'v--- > We are make the use of useSelector
  // useSelector takes an arguments of an State --- > It going to return as a State

  const products = useSelector((state) => state);

  // we are going to dispatch it to Redux Store -- By using useDispatch Hooks
  const dispatch = useDispatch();

  // Create a function , which is going to be fatch all the products
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    // console.log(response.data);
    // we are going to pass the products to our actions
    dispatch(setProducts(response.data));
  };

  // Lets Fetch the call function in use effect
  useEffect(() => {
    fetchProducts(); // we will get the products from the API
  }, []);
  console.log("Products: ", products);

  return (
    <div className="ui grid container ">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
