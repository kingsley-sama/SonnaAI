import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth_context';

// Route for unauthenticated users only (e.g., login, signup pages)
const PublicOnlyRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
    }
    return children;
};

// Route for authenticated users (students and parents)
const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
};

// Route for admin users only
const AdminRoute = ({ children }) => {
    const { isLoggedIn, userType } = useAuth();
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    if (userType !== 'admin') {
        return <Navigate to="/dashboard" />;
    }
    return children;
};

// Route for parent users only
const ParentRoute = ({ children }) => {
    const { isLoggedIn, userType } = useAuth();
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    if (userType !== 'parent') {
        return <Navigate to="/dashboard" />;
    }
    return children;
};

// Route for student users only
const StudentRoute = ({ children }) => {
    const { isLoggedIn, userType } = useAuth();
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    if (userType !== 'student') {
        return <Navigate to="/dashboard" />;
    }
    return children;
};

export { PublicOnlyRoute, PrivateRoute, AdminRoute, ParentRoute, StudentRoute };