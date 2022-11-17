import  { Toaster } from 'react-hot-toast';
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
