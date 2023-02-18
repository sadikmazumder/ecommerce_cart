import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  //In order to get the access of of product - which is in tge Redux store'v--- > We are make the use of useSelector
  // useSelector takes an arguments of an State --- > It going to return as a State
  const products = useSelector((state) => state.allProducts.products);

  const { id, title } = products[0];

  return (
    <div className="four colum wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="Content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
