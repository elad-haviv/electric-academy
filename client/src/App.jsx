import { useState } from "react";
import classes from "./App.module.css";

import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MasterLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        // TODO: implement authentication
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
        ],
    },
    {
        path: "/learn",
        element: <LearnLayout />,
        children: [
            {
                index: true,
                element: <Learn />,
            },
        ],
    },
    {
        path: "/simulator",
        element: <Simulator />,
        children: [
            {
                index: true,
                // TODO: call future simulator loader
            },
            {
                path: "/engineers",
                // TODO: call future simulator loader
            },
        ],
    },
    {
        path: "/questions",
        children: [
            {
                path: "/all",
                element: <Simulator />,
                // TODO: call future questions loader
            },
            {
                path: "/engineers",
                element: <Simulator />,
                // TODO: call future questions loader
            },
            {
                path: "/non-engineers",
                element: <Simulator />,
                // TODO: call future questions loader
            },
            {
                path: "/all",
                element: <Simulator />,
                // TODO: call future questions loader
            },
            {
                path: "/subject/:slug",
                element: <Simulator />,
                // TODO: call future questions loader
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
