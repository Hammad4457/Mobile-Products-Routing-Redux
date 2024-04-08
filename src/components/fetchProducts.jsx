import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./fetchProducts";
//import { useSelector } from "react-redux";

async function Products() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Product has not been fetched");
    }
    const data = await response.json();

    return data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
}

function fetchProducts() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Products();
      setProducts(data);
    };
    fetchData();
  }, []);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>Products</h1>
      <br></br>
      <button onClick={toggle}>{show ? "Hide" : "Show"}</button>

      <ul>
        {show &&
          products.map((product, index) => (
            <li key={index}>
              <div>
                <p>{product.title}</p>
                <img src={product.thumbnail}></img>
                <br></br>
                <p>
                  <Link to={`/details/${product.id}`}>View Details</Link>
                </p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default fetchProducts;
