import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Help from "./components/Help";
import RestoMenu from "./components/RestoMenu";
// import Grocery from "./components/Grocery";



//App render component
const Grocery = lazy(()=>import("./components/Grocery"))
const Main = () => {
    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const application = createBrowserRouter([
    {
        path:"/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path: "/help",
                element: <Help/>
            },
            {
                path: "/menu/:id",
                element: <RestoMenu />
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading...</h1>}> <Grocery /></Suspense>)
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.querySelector(".body"));
root.render(<RouterProvider router={application}/>)