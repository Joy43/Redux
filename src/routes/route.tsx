import App from "@/App";
import { Users } from "lucide-react";
import { createBrowserRouter } from "react-router";

import Tasks from './../pages/Tasks';






const routes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
index:true,
element:<Tasks/>
            },
    {
        path:"users",
        element:<Users/>
    }
]
}  
]);
export default routes;