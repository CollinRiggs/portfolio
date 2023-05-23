import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./routes/Home.js";
import Project, { loader as projectLoader } from "./routes/Project.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.js";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />
        },
        {
            path: "projects/:projectId",
            element: <Project />,
            errorElement: <ErrorPage />,
            loader: projectLoader
        }
    ])

    return (
        <div id="app">
            <Header />
                <RouterProvider router={router} />
            <Footer />
        </div>
    );
};

export default App;
