import React from "react";
import { FaLock, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const CourseDetails = () => {
  const course = useLoaderData();
  const {
    title,
    thumbnail,
    ratings,
    details,
    _id,
    price,
    resource,
    certificate,
    support,
    instructor,
  } = course;
  return (
    <div className="m-8">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[400px] image-full px-4  rounded-2xl "
            src={thumbnail}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <p>{details}</p>
          <p>
            <strong className="mr-1">Instructor:</strong> {instructor}
          </p>
          <p className="">
            <strong className="mr-1">Price: </strong>
            <span className="text-red-500">$</span> {price}{" "}
          </p>

          <p>
            <strong className="mr-1">Resources:</strong> {resource}
          </p>
          <p>
            <strong className="mr-1">Certificate:</strong> {certificate}
          </p>
          <p>
            <strong className="mr-1">Access:</strong> {support}
          </p>

          <p className="flex ">
            <strong className=" font-bold">Ratings:</strong>{" "}
            <p className="flex items-center">
              {" "}
              <FaStar className="text-warning ml-2"></FaStar>{" "}
              <span className="ml-1">{ratings}</span>
            </p>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              {" "}
              <button className="btn btn-primary">
                Get Premium Access <FaLock className="ml-3"></FaLock>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
