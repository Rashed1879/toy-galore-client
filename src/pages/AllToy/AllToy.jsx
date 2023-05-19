import { useEffect, useState } from 'react';

const AllToy = () => {
	const [allToys, setAllToys] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/alltoys')
			.then((res) => res.json())
			.then((data) => setAllToys(data));
	}, []);

	return (
		<>
			<div className="form-control mt-5">
				<div className="input-group w-min mx-auto">
					<input
						type="text"
						placeholder="Search a toy..."
						className="input input-bordered border-[#FFA0A0]"
					/>
					<button className="btn btn-square bg-[#FFA0A0] border-[#FFA0A0]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className="container mx-auto my-5">
				<h2 className="text-3xl text-[#262A53] font-bold mb-4 text-center">
					Available Toys
				</h2>
				<table className="min-w-full divide-y divide-gray-200 border-2 border-gray-200">
					<thead className="bg-[#FFE3E3]">
						<tr>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Seller
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Toy Name
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Sub-category
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Price
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Available Quantity
							</th>
							<th className="px-6 py-3"></th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{allToys.map((toy) => (
							<tr key={toy.id}>
								<td className="px-6 py-4 text-center">
									{toy.sellerName}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.name}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.subCategory}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.price}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.quantity}
								</td>
								<td className="px-6 py-4 text-center">
									<button className="bg-[#262A53] hover:bg-[#628395] text-white font-bold py-2 px-4 rounded-lg">
										View Details
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default AllToy;
