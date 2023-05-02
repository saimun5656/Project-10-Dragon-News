import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import News from "../pages/News/News";
import NewsLayout from "../Layouts/NewsLayout";
import NewsDeatils from "../Components/NewsCard/NewsDeatils/NewsDeatils";
import LoginLoayout from "../Layouts/LoginLoayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import Terms from "../pages/Terms/Terms";

const router=createBrowserRouter([
    {
        path:'/',
        element:<LoginLoayout></LoginLoayout>,
        children:[
            {
              path:'/',
              element:<Navigate to='category/0'></Navigate>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'/reg',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
        
            {
                path:':id',
                element:<News></News>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path:'news-details',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><NewsDeatils></NewsDeatils></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])
export default router