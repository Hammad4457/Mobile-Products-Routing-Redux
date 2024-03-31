import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

async function fetchDetails(productId) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!response.ok) {
      throw new Error("Details not fetched");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
function Details() {
  const { productId } = useParams();
  const [details, setDetails] = useState(null);
  console.log("ID", productId);

  useEffect(() => {
    const fetchData = async () => {
      const productDetails = await fetchDetails(productId);
      setDetails(productDetails);
    };
    fetchData();
  }, [productId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details">
      <h1>{details.title}</h1>
      <h2>Category :</h2>
      <p1>{details.category}</p1>
      <h3>Description :</h3>
      <p2>{details.description}</p2>
      <h4>Price :</h4>
      <p3>${details.price}</p3>
      <h5>Rating :</h5>
      <p4>{details.rating}*</p4>
      <img src={details.thumbnail}></img>
    </div>
  );
}
export default Details;
