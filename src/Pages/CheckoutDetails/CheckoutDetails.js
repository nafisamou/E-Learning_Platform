import React from "react";

import Pdf from "react-to-pdf";

const ref = React.createRef();
const CheckoutDetails = ({ t }) => {
  const { topic1, quiz, time, img1 } = t;
  return (
    <div>
      <button className="btn btn-outline btn-accent">
        <Pdf targetRef={ref} filename="download.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf}>
              <div className="flex justify-between items-center">
                <span className="mr-2">Download Pdf </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>


              </div>
            </button>
          )}
        </Pdf>
      </button>{" "}
      <div className="card md:card-side  bg-base-100 shadow-xl lg:h-[400px] mb-16 p-8 my-20">
        <figure>
          <img className="h-full" src={img1} alt="" />
        </figure>
        <div ref={ref} className=" lg:py-20 lg:px-10 text-center lg:mt-10 p-5 ">
          <h2 className="text-2xl my-2">
            <span className="font-bold">Topics:</span>
            {topic1}
          </h2>

          <p className="lg:mt-5 ">
            <span className="font-bold ">Course-Duration :</span> {time}
          </p>
          <p>
            <span className="font-bold">Total Quiz :</span> {quiz}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
