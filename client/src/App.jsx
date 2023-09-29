import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp,
} from "@clerk/clerk-react";

import MasterLayout from "./components/UI/MasterLayout";
import AuthLayout from "./components/UI/AuthLayout";
import LearnLayout from "./components/UI/LearnLayout";
import DashboardLayout from "./components/UI/DashboardLayout";

import Home from "./routes/Home";
import Learn from "./routes/Learn";
import Dashboard from "./routes/Dashboard";
import Simulator from "./components/Simulator/Simulator";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing authentication service key");
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

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

const authRouter = createBrowserRouter([
    {
        path: "/auth",
        children: [
            {
                path: "/auth/sign-in/*",
                element: <SignIn />,
            },
            {
                path: "/auth/sign-up/*",
                element: <SignUp />,
            },
        ],
    },
]);

export default function App() {
    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <SignedIn>
                <RouterProvider router={router} />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </ClerkProvider>
    );
}
