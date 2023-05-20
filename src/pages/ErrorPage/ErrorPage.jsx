/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const ErrorPage = () => {
	return (
		<>
			<PageTitle title="Error"></PageTitle>
			<section className="flex items-center h-screen p-16 bg-[#FFE3E3]">
				<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
					<div className="max-w-lg text-center mb-5">
						<img src="/images/error-404.jpg" alt="" />
					</div>
					<Link
						to="/"
						className="px-8 py-3 font-semibold rounded bg-[#FFA0A0] text-[#262A53]"
					>
						Back to Home
					</Link>
				</div>
			</section>
		</>
	);
};

export default ErrorPage;
