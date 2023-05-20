import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Update = () => {
	const location = useLocation();
	const { toy } = location.state;

	const handleUpdate = (event) => {
		event.preventDefault();
		const form = event.target;
		const price = form.price.value;
		const quantity = form.quantity.value;
		const description = form.description.value;
		const updateData = { price, quantity, description };

		fetch(`http://localhost:5000/updateToy/${toy._id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(updateData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast('Updated Successfully');
				}
			});
	};

	return (
		<>
			<PageTitle title="Update Toy"></PageTitle>
			<div className="bg-[#FFA0A0]">
				<div className="py-5 bg-[#FFA0A0]">
					<h2 className="text-center font-bold text-5xl my-5 text-[#262A53]">
						Update Toy Information
					</h2>
					<div className="w-3/4 mx-auto my-5">
						<form
							onSubmit={handleUpdate}
							className="grid grid-cols-3 gap-6"
						>
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
									defaultValue={toy.price}
									name="price"
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
									defaultValue={toy.quantity}
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
									defaultValue={toy.description}
									name="description"
								/>
							</div>

							<input
								className="btn bg-[#262A53] col-span-3"
								type="submit"
								value="Update"
							/>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Update;
