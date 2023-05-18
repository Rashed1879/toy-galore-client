/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then((result) => {
				const createdUser = result.user;
				updateUserProfile(name, photo)
					.then(() => {
						navigate('/login');
					})
					.catch((error) => {
						setError('Error updating user profile');
					});
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<div className="bg-base-200">
			<h2 className="text-center py-5 text-5xl font-bold text-[#262A53]">
				Create Account
			</h2>
			<div className="flex items-center">
				<div className="card w-full md:w-96 mx-auto mb-8 shadow-2xl bg-base-100">
					<form onSubmit={handleRegister} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Name
								</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								className="input border-2 border-[#FFA0A0]"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Photo
								</span>
							</label>
							<input
								type="text"
								name="photo"
								placeholder="Your Photo Url"
								className="input border-2 border-[#FFA0A0]"
							/>
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
								Already have an account?{' '}
								<Link
									className="link link-hover font-bold text-[#262A53]"
									to="/login"
								>
									Please Login
								</Link>
							</p>
							<p className="text-error">{error}</p>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-secondary hover:btn-primary">
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
