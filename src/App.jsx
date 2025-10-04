import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./applyout"
import { Home } from "./home"
import { Addsection } from "./addsection"
import { useEffect } from "react";

 
 function App(){
 
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