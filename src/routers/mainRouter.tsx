import {createBrowserRouter, } from "react-router-dom";

import {lazy, Suspense} from "react";
import LoadingPage from "../pages/LoadingPage.tsx";
import todoRouter from "./todoRouter.tsx";

const MainPage = lazy(() => import("../pages/MainPage.tsx"))
const Contact = lazy(() => import("../pages/Contact.tsx"))


const Loading = <LoadingPage/>


const mainRouter = createBrowserRouter([
        {
            path: "/",
            element: <Suspense fallback={Loading}><MainPage/></Suspense>
        },
        {
            path: "/contact",
            element: <Suspense fallback={Loading}><Contact/></Suspense>
        },

        todoRouter

] )

export default mainRouter