import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.tsx";

const Home = lazy(() => import("../pages/Home.tsx"));
const Auth = lazy(() => import("../pages/Auth.tsx"));

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
