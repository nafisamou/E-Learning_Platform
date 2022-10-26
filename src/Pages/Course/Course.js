import React from "react";
import { useLoaderData } from "react-router-dom";

import CourseCard from "../CourseCard/CourseCard";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import './Course.css'

const Course = () => {
  const courses = useLoaderData();
  return (
    <div className="grid lg:grid-cols-12 mt-12 m-10">
      <div className=" col-span-3 ">
        <LeftSideNav></LeftSideNav>
      </div>

      <div className="col-span-9">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
