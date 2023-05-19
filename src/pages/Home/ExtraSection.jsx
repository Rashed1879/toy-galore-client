const ExtraSection = () => {
	return (
		<div className="my-5">
			<div className="mb-5 px-5">
				<h2 className="text-center font-bold text-4xl my-5">
					Gear Up and Find Destination
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
					<div className="flex flex-col justify-center items-center space-y-3">
						<div className="bg-[#262A53] p-4 rounded-full">
							<img
								src="https://cdn-icons-png.flaticon.com/512/3089/3089627.png"
								alt=""
							/>
						</div>
						<h3 className="text-2xl font-bold text-[#FFA0A0]">
							Super Car
						</h3>
						<button className="btn btn-sm bg-[#262A53] rounded-2xl">
							Shop Now
						</button>
					</div>
					<div className="flex flex-col justify-center items-center space-y-3">
						<div className="bg-[#262A53] p-4 rounded-full">
							<img
								src="https://cdn-icons-png.flaticon.com/512/263/263396.png"
								alt=""
							/>
						</div>
						<h3 className="text-2xl font-bold text-[#FFA0A0]">
							The Racer
						</h3>
						<button className="btn btn-sm bg-[#262A53] rounded-2xl">
							Shop Now
						</button>
					</div>
					<div className="flex flex-col justify-center items-center space-y-3">
						<div className="bg-[#262A53] p-4 rounded-full">
							<img
								src="https://cdn-icons-png.flaticon.com/512/6304/6304282.png"
								alt=""
							/>
						</div>
						<h3 className="text-2xl font-bold text-[#FFA0A0]">
							Truck
						</h3>
						<button className="btn btn-sm bg-[#262A53] rounded-2xl">
							Shop Now
						</button>
					</div>
					<div className="flex flex-col justify-center items-center space-y-3">
						<div className="bg-[#262A53] p-4 rounded-full">
							<img
								src="https://cdn-icons-png.flaticon.com/512/9896/9896539.png"
								alt=""
							/>
						</div>
						<h3 className="text-2xl font-bold text-[#FFA0A0]">
							Police Car
						</h3>
						<button className="btn btn-sm bg-[#262A53] rounded-2xl">
							Shop Now
						</button>
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row items-center bg-[#628395]">
				<div className="w-full md:w-3/4">
					<img
						src="https://images.pexels.com/photos/4933610/pexels-photo-4933610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
				<div className="w-full md:w-1/3 p-5 text-[#FFE3E3] space-y-10">
					<h2 className="text-3xl font-bold">
						Grow Your Baby With Joy And Happiness!!
					</h2>
					<p>
						Playing with your baby not only brings joy and laughter
						to both of you but also lays the foundation for their
						healthy development. It nurtures their physical,
						cognitive, emotional, and social well-being,
						contributing to their growth with happiness and creating
						cherished memories that will last a lifetime.
					</p>
					<button className="btn btn-primary">Learn More</button>
				</div>
			</div>
		</div>
	);
};

export default ExtraSection;
