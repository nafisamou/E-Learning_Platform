import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { title, img, ratings, details, _id } = course;
    return (
        <div className='m-8'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='w-64' src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {title}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
   

      <Link to={`courses/${_id}`}> <button className="btn btn-primary">Premium Access</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CourseDetails;