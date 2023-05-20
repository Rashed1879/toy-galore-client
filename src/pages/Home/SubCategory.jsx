import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const SubCategory = () => {
	const { user } = useContext(AuthContext);
	const [subCategory, setSubCategory] = useState('');
	const [toys, setToys] = useState([]);

	const handleToast = () => {
		if (!user) {
			return toast('You have to log in first to view details');
		}
	};

	useEffect(() => {
		fetch(`http://localhost:5000/alltoys/${subCategory}`)
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
			});
	}, [subCategory]);

	return (
		<div className="my-10">
			<h2 className="text-3xl text-center text-[#262A53] font-bold">
				Watch Out The Available Toys!!
			</h2>
			<Tabs className="text-center my-5">
				<TabList>
					<Tab onClick={() => setSubCategory('car')}>Car</Tab>
					<Tab onClick={() => setSubCategory('truck')}>Truck</Tab>
					<Tab onClick={() => setSubCategory('sport')}>
						Sports Car
					</Tab>
				</TabList>

				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 bg-[#FFA0A0] rounded-xl">
						{toys.map((toy) => (
							<div
								key={toy._id}
								className="card w-full bg-[#FFE3E3] shadow-xl"
							>
								<figure className="rounded-xl">
									<img
										src={toy.photo}
										alt="Shoes"
										className="rounded-xl w-full h-72"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className=" text-[#262A53] font-bold text-2xl">
										{toy.name}
									</h2>
									<hr className="border-2 border-dotted border-[#262A53] w-full my-2" />
									<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-2 w-full my-3">
										<div className="badge border-[#262A53] text-[#262A53] badge-outline text-sm font-bold p-3">
											Price : ${toy.price}
										</div>
										<div className="badge border-[#262A53] text-[#262A53] badge-outline text-sm font-bold p-3">
											Rating : {toy.rating}
										</div>
										<div className="card-actions">
											<button
												onClick={handleToast}
												className="btn btn-sm bg-[#262A53] hover:bg-[#628395] text-white font-bold py-2 px-4 rounded-full"
											>
												<Link
													to={`/toydetails/${toy._id}`}
												>
													View Details
												</Link>
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 bg-[#FFA0A0] rounded-xl">
						{toys.map((toy) => (
							<div
								key={toy._id}
								className="card w-full bg-[#FFE3E3] shadow-xl"
							>
								<figure className="rounded-xl">
									<img
										src={toy.photo}
										alt="Shoes"
										className="rounded-xl w-full h-72"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className=" text-[#262A53] font-bold text-2xl">
										{toy.name}
									</h2>
									<hr className="border-2 border-dotted border-[#262A53] w-full my-2" />
									<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-2 w-full my-3">
										<div className="badge border-[#262A53] text-[#262A53] badge-outline text-sm font-bold p-3">
											Price : ${toy.price}
										</div>
										<div className="badge border-[#262A53] text-[#262A53] badge-outline text-sm font-bold p-3">
											Rating : {toy.rating}
										</div>
										<div className="card-actions">
											<button
												onClick={handleToast}
												className="btn btn-sm bg-[#262A53] hover:bg-[#628395] text-white font-bold py-2 px-4 rounded-full"
											>
												<Link
													to={`/toydetails/${toy._id}`}
												>
													View Details
												</Link>
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 bg-[#FFA0A0] rounded-xl">
						{toys.map((toy) => (
							<div
								key={toy._id}
								className="card w-full bg-[#FFE3E3] shadow-xl"
							>
								<figure className="rounded-xl">
									<img
										src={toy.photo}
										alt="Shoes"
										className="rounded-xl w-full h-72"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className=" text-[#262A53] font-bold text-2xl">
										{toy.name}
									</h2>
									<hr className="border-2 border-dotted border-[#262A53] w-full my-2" />
									<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-2 w-full my-3">
										<div className="badge border-[#262A53] text-[#262A53] badge-outline text-sm font-bold p-3">
											Price : ${toy.price}
										</div>
										<div className="badge border-[#262A53] text-[#262A53] badge-outline text-sm font-bold p-3">
											Rating : {toy.rating}
										</div>
										<div className="card-actions">
											<button
												onClick={handleToast}
												className="btn btn-sm bg-[#262A53] hover:bg-[#628395] text-white font-bold py-2 px-4 rounded-full"
											>
												<Link
													to={`/toydetails/${toy._id}`}
												>
													View Details
												</Link>
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default SubCategory;
