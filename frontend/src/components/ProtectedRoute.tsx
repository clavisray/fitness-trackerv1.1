import { AuthContext } from "../context/AuthContext"
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
    const auth = useContext(AuthContext);

    if (!auth) {
        return null;
    };

    const { user, loading } = auth;

    if (loading) {
        return <p>Ładowanie...</p>
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />;
}

export default ProtectedRoute;