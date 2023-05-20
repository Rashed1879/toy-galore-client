import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
	const toy = useLoaderData();

	return (
		<div className="container mx-auto py-24">
			<div className="flex bg-[#262A53] shadow-xl rounded-lg">
				<div className="w-1/2 text-white px-8 py-2 my-auto border-y-2 border-[#628395]">
					<h2 className="text-center text-5xl text-[#FFA0A0] font-bold mb-5">
						{toy.name}
					</h2>
					<p className="text-xl text-center font-semibold">
						{toy.description}
					</p>
					<hr className="border-2 border-[#FFE3E3] my-3" />
					<div className="flex w-full">
						<div className="w-1/2">
							<h4 className="text-2xl">Product Info</h4>
							<p className="text-md font-semibold text-[#FFA0A0]">
								Price : {toy.price}
							</p>
							<p className="text-md font-semibold text-[#FFA0A0]">
								Rating : {toy.rating}
							</p>
							<p className="text-md font-semibold text-[#FFA0A0]">
								Quantity : {toy.quantity}
							</p>
						</div>
						<div className="bg-[#FFE3E3] w-2 h-auto mx-10"></div>
						<div className="w-1/2">
							<h4 className="text-2xl">Seller Info</h4>
							<p className="text-md font-semibold text-[#FFA0A0]">
								Seller Name : {toy.sellerName}
							</p>
							<p className="text-md font-semibold text-[#FFA0A0]">
								Seller Email : {toy.sellerEmail}
							</p>
						</div>
					</div>
				</div>
				<figure className="w-1/2">
					<img
						className="w-full rounded-lg"
						src={toy.photo}
						alt="Album"
					/>
				</figure>
			</div>
		</div>
	);
};

export default ToyDetails;
