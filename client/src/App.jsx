import React from "react";
import { createBrowserRouter, Outlet, RouterProvider, useParams } from "react-router-dom";
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
import Simulator from "./components/Simulator/Simulator";

import Home from "./routes/Home";
import Learn from "./routes/Learn";
import Dashboard from "./routes/Dashboard";
import LandingPage from "./routes/LandingPage";
import SimulatorMenu from "./components/Simulator/SimulatorMenu";
import QuestionRepoMenu from "./routes/QuestionRepoMenu";

import QuestionsLoader from "./loaders/QuestionsLoader";

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
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <SimulatorMenu />
                    },
                    {
                        path: '/simulator/default',
                        element: <Simulator />,
                        loader: QuestionsLoader,
                    },
                    {
                        path: "/simulator/engineers",
                        element: <Simulator />,
                        loader: QuestionsLoader,
                    },
                ],
            },
            {
                path: "/questions",
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <QuestionRepoMenu />,
                    },
                    {
                        path: "/questions/all",
                        element: <Simulator />,
                        loader: QuestionsLoader({
                            amount: null,
                            showEngineers: true,
                            showNonEngineers: true,
                            shuffle: false,
                        }),
                    },
                    {
                        path: "/questions/random",
                        element: <Simulator />,
                        loader: QuestionsLoader({
                            amount: 1,
                            showEngineers: true,
                            showNonEngineers: true,
                            shuffle: true,
                        }),
                    },
                    {
                        path: "/questions/engineers",
                        element: <Simulator />,
                        loader: QuestionsLoader({
                            amount: null,
                            showNonEngineers: false,
                            showEngineers: true,
                            shuffle: false,
                        }),
                    },
                    {
                        path: "/questions/non-engineers",
                        element: <Simulator />,
                        loader: QuestionsLoader({
                            amount: null,
                            showNonEngineers: true,
                            showEngineers: false,
                            shuffle: false,
                        }),
                    },
                    {
                        path: "/questions/subject/:subject",
                        element: <Simulator />,
                        loader: QuestionsLoader({
                            amount: null,
                            showNonEngineers: true,
                            showEngineers: true,
                            shuffle: true
                        }),
                    },
                ],
            },
        ],
    },
]);

const guestRouter = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
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
                <RouterProvider router={guestRouter} />
            </SignedOut>
        </ClerkProvider>
    );
}
