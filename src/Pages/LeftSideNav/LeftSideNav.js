import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4 className="font-bold text-xl ml-8">All Category: {categories.length}</h4>
      <div className="mt-8">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}> <div className="btn-group btn-group-vertical">
                <button className="btn btn-outline btn-primary mb-5 w-60"> {category.name}</button>
              </div>
            
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
