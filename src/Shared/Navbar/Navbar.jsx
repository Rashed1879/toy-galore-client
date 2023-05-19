/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [open, setOpen] = useState(false);
	const handleLogout = () => {
		logOut()
			.then()
			.catch((error) => console.log(error));
	};

	return (
		<nav className="bg-[#FFE3E3] text-primary">
			<div className="flex justify-between items-center md:p-4 p-3">
				<div className="flex items-center space-x-10">
					<img
						src="/images/ToyGalore.png"
						className="w-48 h-12"
						alt=""
					/>
					<ul
						className={`md:flex md:space-x-5 text-[#262A53] font-semibold absolute duration-500 md:static ${
							open
								? 'top-2 right-12 text-center bg-[#FFE3E3] shadow-md p-2 rounded-md z-10'
								: '-top-96 right-12 text-center bg-[#FFE3E3] rounded-md'
						}`}
					>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'pb-1 border-b-2 border-[#262A53] hover:border-[#FFA0A0]'
										: ''
								}
								to="/"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'pb-1 border-b-2 border-[#262A53] hover:border-[#FFA0A0]'
										: ''
								}
								to="/alltoys"
							>
								All Toys
							</NavLink>
						</li>
						{user && (
							<>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive
												? 'pb-1 border-b-2 border-[#262A53] hover:border-[#FFA0A0]'
												: ''
										}
										to="/mytoys"
									>
										My Toys
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) =>
											isActive
												? 'pb-1 border-b-2 border-[#262A53] hover:border-[#FFA0A0]'
												: ''
										}
										to="/addtoys"
									>
										Add a toy
									</NavLink>
								</li>
							</>
						)}
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'pb-1 border-b-2 border-[#262A53] hover:border-[#FFA0A0]'
										: ''
								}
								to="/blogs"
							>
								Blogs
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'pb-1 border-b-2 border-[#262A53] hover:border-[#FFA0A0]'
										: ''
								}
								to="/register"
							>
								Sign Up
							</NavLink>
						</li>

						<div className="md:hidden">
							{user ? (
								<div className="dropdown dropdown-end">
									<label
										tabIndex={0}
										className="btn btn-ghost btn-circle avatar"
										title={user.displayName || user.email}
									>
										<div className="w-10 rounded-full">
											<img src={user.photoURL} />
										</div>
									</label>
									<ul
										tabIndex={0}
										className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-24 text-center cursor-pointer"
									>
										<div onClick={handleLogout}>Logout</div>
									</ul>
								</div>
							) : (
								<Link to="/login">
									<button className="btn btn-sm btn-outline hover:bg-[#FFA0A0]">
										Login
									</button>
								</Link>
							)}
						</div>
					</ul>
				</div>

				<div onClick={() => setOpen(!open)} className="md:hidden ">
					<span>
						{open === true ? (
							<HiX className="h-6 w-6 text-[#262A53]" />
						) : (
							<HiMenu className="h-6 w-6 text-[#262A53]" />
						)}
					</span>
				</div>

				<div className="hidden md:block">
					{user ? (
						<div className="flex items-center space-x-3">
							<div className="avatar">
								<div
									className="w-10 rounded-full"
									title={user.displayName || user.email}
								>
									<img src={user.photoURL} />
								</div>
							</div>

							<div
								onClick={handleLogout}
								className="tooltip tooltip-bottom"
								data-tip="Logout"
							>
								<RiLogoutBoxRFill className="text-5xl text-[#262A53]" />
							</div>
						</div>
					) : (
						<Link to="/login">
							<button className="btn btn-sm btn-outline hover:bg-[#FFA0A0]">
								Login
							</button>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
