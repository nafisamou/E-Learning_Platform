import React from "react";
import { Link} from "react-router-dom";

const CourseCard = ({course}) => {

  const { title, img, ratings, details, _id, category,id } = course;
  return (
    <div>
      <div className="card w-96  h-[680px] bg-base-100 shadow-xl">
        <figure>
          <img className="w-fit h-60" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name:{title}</h2>
          <p>{details}</p>
          <p >Ratings:<span className="ml-2">{ratings}</span>star</p>
          <div className="card-actions justify-end">
           <Link to={`/courses/${_id}`}> <button className="btn btn-primary">Course Details</button></Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
