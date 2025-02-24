import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Loader from './components/Loader/Loader';
// import AdminLayout from './layouts/AdminLayout';
const BASE_URL = "/login"

// A simple authentication check function
const isAuthenticated = () => {
    return !!localStorage.getItem('auth-role'); // Adjust this according to your token storage logic
};

// AuthGuard component
const AuthGuard = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

// Get the user's role from localStorage or another source
const getRole = () => {

    console.log('DataRole', JSON.parse(localStorage.getItem('auth-role')));
    const roleType = JSON.parse(localStorage.getItem('auth-role'));
    console.log('userdata---------',roleType);
    
    return roleType.role;
};

const RoleGuard = ({ role, children }) => {
    const userRole = getRole();

    if (!isAuthenticated()) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }
    console.log('rolerolerolerole', role,userRole);

    // If the route requires a specific role and the user doesn't have it, redirect to "Unauthorized"
    if (role && !role.includes(userRole)) {
        return <Navigate to="/unauthorized" />;
    }

    // If the user is authenticated and has the correct role, render the children (i.e., the protected route)
    return children;
};

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {routes.map((route, i) => {
                const Guard = route.guard || Fragment;
                const Layout = route.layout || Fragment;
                const Element = route.element;
                const role = route.role; // Role for the route

                return (
                    <Route
                        key={i}
                        path={route.path}
                        element={
                            <Guard>
                                {/* Check if role is required, if yes, apply RoleGuard */}
                                {role ? (
                                    <RoleGuard role={role}>
                                        {route.routes ? renderRoutes(route.routes) : <Element />}
                                    </RoleGuard>
                                ) : (
                                    <Layout>{route.routes ? renderRoutes(route.routes) : <Element />}</Layout>
                                )}
                            </Guard>
                        }
                    />
                );
            })}
        </Routes>
    </Suspense>
);

const routes = [
    {
        exact: 'true',
        path: '/login',
        element: lazy(() => import('./views/auth/login'))
    },
      {
        exact: 'true',
        path: '/unauthorized',
        element: lazy(() => import('./views/auth/unauthorized')) // Unauthorized page for role mismatch
      },
    {
        exact: 'true',
        path: '/admin-registration',
        element: lazy(() => import('./views/registration/admin')),
        guard: AuthGuard, // Protecting this route
        role: ['admin']
    },
    {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
    }

];

export default routes;
