import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
  };

  const handleNameChanged = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center pt-8">
        <div className="flex flex-col max-w-md lg:w-[380px] p-6 rounded-md sm:p-10 bg-gray-100  text-blue-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  onChange={handleNameChanged}
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={name}
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="photo" className="block mb-2 text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  id="photo"
                  placeholder="PhotoURL"
                  defaultValue={user?.photoURL}
                  ref={photoURLRef}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  //   onBlur={event => setUserEmail(event.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  readOnly
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-blue-800 hover:bg-blue-700 hover:text-white text-gray-100"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button
              //   onClick={handleReset}
              className="text-xs hover:underline text-gray-400"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
