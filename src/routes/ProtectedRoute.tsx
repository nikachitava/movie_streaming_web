import type React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = false;

    return isAuthenticated ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
