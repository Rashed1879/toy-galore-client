/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
	const { signIn, signInWithGoogle, updateUserProfile } =
		useContext(AuthContext);
	const [error, setError] = useState('');
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	const navigate = useNavigate();

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const loggedUser = result.user;
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setError('Wrong Credential');
			});
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then((result) => {
				const user = result.user;
				updateUserProfile(user.name, user.photoURL)
					.then(() => {
						navigate(from, { replace: true });
					})
					.catch((error) => {
						setError('Error updating user profile');
					});
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<div className="bg-base-200">
			<h2 className="text-center py-5 text-5xl font-bold text-[#262A53]">
				Sign In
			</h2>
			<div className="flex items-center">
				<div className="card w-full md:w-96 mx-auto mb-8 shadow-2xl bg-base-100">
					<form onSubmit={handleLogin} className="card-body">
						<div className="form-control font-bold text-2xl text-[#628395] flex flex-col items-center justify-center text-center">
							Sign In With{' '}
							<div
								className=" font-bold"
								onClick={handleGoogleSignIn}
							>
								<FcGoogle className="text-5xl mx-auto cursor-pointer" />
							</div>
						</div>
						<div className="divider font-bold text-[#262A53]">
							OR
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Email
								</span>
							</label>
							<input
								type="email"
								placeholder="email"
								name="email"
								className="input border-2 border-[#FFA0A0]"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Password
								</span>
							</label>
							<input
								type="password"
								placeholder="password"
								name="password"
								className="input border-2 border-[#FFA0A0]"
								required
							/>
							<p className="mt-2">
								New to this Website?{' '}
								<Link
									className="link link-hover font-bold text-[#262A53]"
									to="/register"
								>
									Please Register
								</Link>
							</p>
						</div>

						<p className="text-error">{error}</p>
						<div className="form-control mt-6">
							<button className="btn bg-[#FFA0A0] hover:bg-[#628395] rounded-full">
								Sign In
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
