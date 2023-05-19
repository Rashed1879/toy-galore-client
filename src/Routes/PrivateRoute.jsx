/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return (
			<div className="flex item-center justify-center min-h-screen">
				<progress className="progress w-64"></progress>
			</div>
		);
	}
	if (user) {
		return children;
	}
	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
