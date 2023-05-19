/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const AddToy = () => {
	const { user } = useContext(AuthContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const photo = form.photo.value;
		const name = form.name.value;
		const sellerName = form.sellerName.value;
		const sellerEmail = form.sellerEmail.value;
		const subCategory = form.subCategory.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const quantity = form.quantity.value;
		const description = form.description.value;
		const data = {
			photo,
			name,
			sellerName,
			sellerEmail,
			subCategory,
			price,
			rating,
			quantity,
			description,
		};
		fetch('http://localhost:5000/toys', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					toast('The Toy is Added!');
				}
			});
	};

	return (
		<div className="bg-[#FFA0A0]">
			<div className="py-5 bg-[#FFA0A0]">
				<h2 className="text-center font-bold text-5xl my-5 text-[#262A53]">
					Add A Toy
				</h2>
				<div className="w-3/4 mx-auto my-5">
					<form
						onSubmit={handleSubmit}
						className="grid grid-cols-3 gap-6"
					>
						<div className="form-control col-span-3">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Photo URL
								</span>
							</label>
							<input
								type="url"
								className="input input-bordered w-full"
								placeholder="Photo Url Of Your Toy"
								name="photo"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Toy Name
								</span>
							</label>
							<input
								type="text"
								className="input input-bordered w-full"
								placeholder="Name of your Toy"
								name="name"
							/>
						</div>
						<div className="form-control col-span-2">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Seller Name
								</span>
							</label>
							<input
								type="text"
								className="input input-bordered w-full"
								placeholder="Seller Name"
								defaultValue={user?.displayName}
								name="sellerName"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Seller Email
								</span>
							</label>
							<input
								type="email"
								className="input input-bordered max-w-sm"
								placeholder="Seller Email"
								defaultValue={user?.email}
								name="sellerEmail"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Select Sub-Category
								</span>
							</label>
							<select
								className="select select-bordered w-full max-w-xs"
								name="subCategory"
								type="text"
							>
								<option value="car">Car</option>
								<option value="truck">Truck</option>
								<option value="sport">Sports Car</option>
							</select>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Price
								</span>
							</label>
							<input
								type="text"
								className="input input-bordered max-w-sm"
								placeholder="price"
								name="price"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Rating
								</span>
							</label>
							<input
								type="text"
								className="input input-bordered max-w-sm"
								placeholder="Rating"
								name="rating"
							/>
						</div>
						<div className="form-control col-span-2">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Quantity
								</span>
							</label>
							<input
								type="text"
								className="input input-bordered w-full"
								placeholder="Quantity"
								name="quantity"
							/>
						</div>
						<div className="form-control col-span-3">
							<label className="label">
								<span className="label-text text-xl font-bold">
									Detail Description
								</span>
							</label>
							<textarea
								type="text"
								className="textarea textarea-bordered w-full"
								placeholder="Describe Your Product"
								name="description"
							/>
						</div>

						<input
							className="btn bg-[#262A53] col-span-3"
							type="submit"
							value="Add Toy"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddToy;
