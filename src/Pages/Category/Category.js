import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';



const Category = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div className='mt-16 m-10'>
            {
            categories.map(course=><CourseCard key={course._id} course={course}></CourseCard>)
            }
        </div>
    );
};

export default Category;