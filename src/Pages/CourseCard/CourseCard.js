import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { title, img, ratings, details, _id, price } = course;
  return (
    <div className="m-6">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-64 px-4" src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {title}</h2>
          <p>
            {details.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/courses/${_id}`}>
                  <span className="text-blue-500">Read More...</span>
                </Link>{" "}
              </>
            ) : (
              <>{details}</>
            )}
          </p>
          <p className="">
            <strong className="mr-1">Price: </strong><span className="text-red-500">$</span> {price}{" "}
          </p>
          <p className="flex">
            <strong className=" font-bold">Ratings:</strong>{" "}
            <p className="flex items-center">
              {" "}
              <FaStar className="text-warning ml-2"></FaStar>{" "}
              <span className="ml-1">{ratings}</span>
            </p>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/courses/${_id}`}>
              {" "}
              <button className="btn btn-primary">Course Details <FaArrowRight className="ml-3"></FaArrowRight></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
