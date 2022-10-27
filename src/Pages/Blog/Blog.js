import React from "react";


const Blog = () => {
  return (
   

    <div className="bg mb-20">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                {/* <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  />
                </svg> */}

                <span className="relative">Q/</span>
              </span>{" "}
              A?
            </h2>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">What is Cors?</p>
                <p className="text-gray-700">
                  CORS is a node. js package for providing a Connect/Express
                  middleware that can be used to enable CORS with various
                  options.
                  <br />
                  <br />
                  Cross-origin resource sharing (CORS) allows AJAX requests to
                  skip the Same-origin policy and access resources from remote
                  hosts.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  Why are you using firebase?
                </p>
                <p className="text-gray-700">
                  Firebase helps you develop high-quality apps, grow your user
                  base, and earn more money. Each feature works independently,
                  and they work even better together.
                  <br />
                  <br />
                  Firebase provides detailed documentation and cross-platform
                  SDKs to help you build and ship apps on Android, iOS, the web,
                  C++, and Unity.
                </p>
              </div>
               <div>
                <p className="mb-4 text-xl font-medium">
                  How does the private route work?
                </p>
                <p className="text-gray-700">
                  The private route component is used to protect selected pages
                  in a React app from unauthenticated users.
                  <br />
                  <br />
                  The private route component is similar to the public route,
                  the only change is that redirect URL and authenticate
                  condition. If the user is not authenticated he will be
                  redirected to the login page and the user can only access the
                  authenticated routes If he is authenticated (Logged in).
                </p>
              </div>
            </div>
            <div className="space-y-8">

              <div>
                <p className="mb-4 text-xl font-medium">
                  What is Node? How does Node work?
                </p>

                <p className="text-gray-700">
                  Node.js is an open-source, cross-platform JavaScript runtime
                  environment and library for running web applications outside.
                  Developers use Node.js to create server-side web applications,
                  and it is perfect for data-intensive applications since it
                  uses an asynchronous, event-driven model.
                  <br />
                  <br />
                  Node.js accepts the request from the clients and sends the
                  response, while working with the request node.js handles them
                  with a single thread. To operate I/O operations or requests
                  node.js use the concept of threads. Thread is a sequence of
                  instructions that the server needs to perform. It runs
                  parallel on the server to provide the information to multiple
                  clients. Node.js is an event loop single-threaded language. It
                  can handle concurrent requests with a single thread without
                  blocking it for one request. <br />
                  <br />
                  <strong>Node.js basically works on two concept :</strong>
                  <li>Asynchronous</li>
                  <li>Non-blocking I/O</li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
