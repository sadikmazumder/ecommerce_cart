import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  //In order to get the access of of product - which is in tge Redux store'v--- > We are make the use of useSelector
  // useSelector takes an arguments of an State --- > It going to return as a State
  const products = useSelector((state) => state.allProducts.products);

  // all the products is an array of an Product , So we are going to use the map() to display the products
  const renderList = products.map((products) => {
    //De-structuring the product details which is comming from the products
    const { id, title, image, price, category } = products;
    return (
      <div className="four colum wide" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="Content">
                <div className="header">{title}</div>
                {/* category  and  price we are getting it from the products array*/}
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
  //const { id, title } = products[0];
};

export default ProductComponent;
