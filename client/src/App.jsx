import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MasterLayout from "./components/UI/MasterLayout";
import AuthLayout from "./components/UI/AuthLayout";
import LearnLayout from "./components/UI/LearnLayout";
import DashboardLayout from "./components/UI/DashboardLayout";

import Home from "./routes/Home";
import Learn from "./routes/Learn";
import Dashboard from "./routes/Dashboard";
import Simulator from "./components/Simulator/Simulator";

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
                path: "/simulator/engineers",
                // TODO: call future simulator loader
            },
        ],
    },
    {
        path: "/questions",
        children: [
            {
                path: "/questions/all",
                element: <Simulator />,
                // TODO: call future questions loader
            },
            {
                path: "/questions/engineers",
                element: <Simulator />,
                // TODO: call future questions loader
            },
            {
                path: "/questions/non-engineers",
                element: <Simulator />,
                // TODO: call future questions loader
            },
            {
                path: "/questions/subject/:slug",
                element: <Simulator />,
                // TODO: call future questions loader
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
