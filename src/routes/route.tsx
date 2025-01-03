import App from "@/App";
import { Users } from "lucide-react";
import { createBrowserRouter } from "react-router";
import login from './../pages/Login';






const routes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
    {
        path:"users",
        element:<Users/>
    }
]
}  
]);
export default routes;