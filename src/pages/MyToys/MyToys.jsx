import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [myToys, setMyToys] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/mytoys/${user.email}`)
			.then((res) => res.json())
			.then((data) => setMyToys(data));
	}, [user]);
	return (
		<div className="container mx-auto my-5">
			<h2 className="text-3xl text-[#262A53] font-bold mb-4 text-center">
				My Toys
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
						<th className="px-6 py-3"></th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{myToys.map((toy) => (
						<tr key={toy._id}>
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
									<Link to={`/toydetails/${toy._id}`}>
										Update
									</Link>
								</button>
							</td>
							<td className="px-6 py-4 text-center">
								<button className="bg-[#262A53] hover:bg-[#628395] text-white font-bold py-2 px-4 rounded-lg">
									<Link to={`/toydetails/${toy._id}`}>
										Delete
									</Link>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyToys;
