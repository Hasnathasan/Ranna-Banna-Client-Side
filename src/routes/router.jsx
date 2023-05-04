import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/Layouts/HomeLayout";
import ErrorPage from "../components/Error/ErrorPage";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Chefs from "../components/Chefs/Chefs";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import Blog from "../components/Blog/Blog";
import PriveteRoute from "../components/PrivateRoute/PriveteRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Chefs></Chefs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chef/:id',
                element: <PriveteRoute><RecipeDetails></RecipeDetails></PriveteRoute>,
                loader: ({params}) => fetch(`https://chef-recipe-server-side-weld.vercel.app/chefs/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;