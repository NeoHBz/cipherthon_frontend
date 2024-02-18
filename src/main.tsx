import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { LoginPage } from "./Pages/Login";
import { DefaultLayout } from "./Layout/DefaultLayout";
import { SignUpPage } from "./Pages/Signup";
import { PatientDashboard } from "./Pages/Patient/Dashboard";
import { PatientCard } from "./Pages/Patient/PatientCard";
import { PatientManagePage } from "./Pages/Patient/Manage";

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
        path: "/patient",
        element: (
            <DefaultLayout>
                <PatientDashboard />
            </DefaultLayout>
        ),
    },
    {
        path: "/patient/card",
        element: (
            <DefaultLayout>
                <PatientCard />
            </DefaultLayout>
        ),
    },
    {
        path: "/patient/manage",
        element: (
            <DefaultLayout>
                <PatientManagePage />
            </DefaultLayout>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
