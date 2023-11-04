import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";


const createdRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>Error Page</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])


export default createdRoute;