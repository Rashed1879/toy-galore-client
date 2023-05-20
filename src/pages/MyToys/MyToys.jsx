import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [myToys, setMyToys] = useState([]);
	const [sortOrder, setSortOrder] = useState(1);

	useEffect(() => {
		fetch(
			`http://localhost:5000/mytoys/${user.email}?sortOrder=${sortOrder}`
		)
			.then((res) => res.json())
			.then((data) => setMyToys(data));
	}, [user, sortOrder]);

	const handleSorting = (event) => {
		event.preventDefault();
		const form = event.target;
		const orderValue = form.orderValue.value;
		setSortOrder(orderValue);
	};

	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/deleteToy/${id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire(
								'Deleted!',
								'Your file has been deleted.',
								'success'
							);
							const remaining = myToys.filter(
								(toy) => toy._id !== id
							);
							setMyToys(remaining);
						}
					});
			}
		});
	};

	return (
		<div className="container mx-auto my-5">
			<h2 className="text-3xl text-[#262A53] font-bold mb-4 text-center">
				My Toys
			</h2>
			<div className="w-min mx-auto mb-5">
				<form className="form-control" onSubmit={handleSorting}>
					<div className="input-group">
						<input
							type="submit"
							className="btn"
							value="Sort By Price"
						/>
						<select
							className="select select-bordered"
							name="orderValue"
						>
							<option value={1}>Ascending</option>
							<option value={-1}>Descending</option>
						</select>
					</div>
				</form>
			</div>
			<div>
				<table className="min-w-full divide-y divide-gray-200 border-2 border-gray-200">
					<thead className="bg-[#FFE3E3]">
						<tr>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Image
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Toy Name
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Seller
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Seller Email
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Sub-category
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Price
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Rating
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Available Quantity
							</th>
							<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">
								Description
							</th>
							<th className="px-6 py-3"></th>
							<th className="px-6 py-3"></th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{myToys.map((toy) => (
							<tr key={toy._id}>
								<td className="px-6 py-4 text-center">
									<img
										className="w-20 h-20"
										src={toy.photo}
										alt=""
									/>
								</td>
								<td className="px-6 py-4 text-center">
									{toy.name}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.sellerName}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.sellerEmail}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.subCategory}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.price}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.rating}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.quantity}
								</td>
								<td className="px-6 py-4 text-center">
									{toy.description.slice(0, 20)}...
								</td>
								<td className="px-6 py-4 text-center">
									<button className="btn btn-sm bg-[#262A53] hover:bg-[#628395] text-white font-bold py-2 px-4 rounded-lg">
										<Link
											to={`/update/${toy._id}`}
											state={{ toy }}
										>
											Update
										</Link>
									</button>
								</td>
								<td className="px-6 py-4 text-center">
									<button
										onClick={() => handleDelete(toy._id)}
										className="btn btn-sm bg-[#e91b1f] hover:bg-[#628395] text-white font-bold py-2 px-4 rounded-lg"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyToys;
