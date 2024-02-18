import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { LoginPage } from "./Pages/Login";
import { DefaultLayout } from "./Layout/DefaultLayout";
import { SignUpPage } from "./Pages/Signup";
import { PatientDashboard } from "./Pages/Patient/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <DefaultLayout>
                <App />
            </DefaultLayout>
        ),
    },
    {
        path: "/login",
        element: (
            <DefaultLayout>
                <LoginPage />
            </DefaultLayout>
        ),
    },
    {
        path: "/register",
        element: (
            <DefaultLayout>
                <SignUpPage />
            </DefaultLayout>
        ),
    },
    {
        path: "/patient/dashboard",
        element: (
            <DefaultLayout>
                <PatientDashboard />
            </DefaultLayout>
        ),
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
