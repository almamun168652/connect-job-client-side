import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AlllJobs from "../Pages/AllJobs/AlllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AddAJobs from "../Pages/AddAJobs/AddAJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import CardDetails from "../Pages/CardDetails/CardDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";



const createdRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/all-jobs',
                element: <AlllJobs></AlllJobs>
            },
            {
                path: '/applied-jobs',
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            },
            {
                path: '/add-a-jobs',
                element: <PrivateRoute><AddAJobs></AddAJobs></PrivateRoute>
            },
            {
                path: '/my-jobs',
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },
            {
                path: '/job/:id',
                element: <CardDetails></CardDetails>
            },

        ]
    }
])


export default createdRoute;