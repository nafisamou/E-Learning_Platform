import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutDetails from "../CheckoutDetails/CheckoutDetails";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Checkout = () => {
  const premium = useLoaderData();
  const { topics, title  } = premium;
  //   console.log(premium);
  return (
    <div className="">
      <div className="flex justify-between items-center mx-5">
        <h1 className="font-bold text-center text-2xl text-indigo-500 mt-10 mb-10">
          <span>About </span>
         <button className=""> <span className="font-bolder text-indigo-800">{title}</span></button> <span>Course :-</span>
        </h1>
       
      
      </div>
      <div   className="grid lg:grid-cols-1 grid-cols-1 m-auto text-center gap-5 mt-2 lg:mx-5 px-3">
        {topics.map((t) => (
          <CheckoutDetails  t={t}></CheckoutDetails>
        ))}
      </div>
     
      
    </div>
  );
};

export default Checkout;
