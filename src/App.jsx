import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./applyout"
import { Home } from "./home"
import { Addsection } from "./addsection"
import { useEffect } from "react";

 
 function App(){
  useEffect(() => {
    const handleBeforeUnload = (event) => {
        // Show a confirmation message when the page is being refreshed or navigated away
        const message = "Are you sure you want to leave? Changes you made may not be saved.";
        event.returnValue = message; // For most modern browsers
        return message; // For some older browsers
    };

    // Add the event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
    };
}, []);
const route = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/additem",
        element:<Addsection/>
      },
    ]
  }
])
  return<>
  <RouterProvider router={route}/>
  
  </>
}
export default App