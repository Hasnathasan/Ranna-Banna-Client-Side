import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/Layouts/HomeLayout";
import ErrorPage from "../components/Error/ErrorPage";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Chefs from "../components/Chefs/Chefs";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";

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
                path: '/chef/:id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params}) => fetch(`http://localhost:3000/chefs/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;