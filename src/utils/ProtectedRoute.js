import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ userRole, children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  if (user.role != userRole) {
    return <Navigate to="/" replace={true} />;
  }
};
