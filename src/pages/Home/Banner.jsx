const Banner = () => {
	return (
		<section>
			<div className="carousel w-full h-[600px]">
				<div id="slide1" className="carousel-item relative w-full">
					<img
						src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=600"
						className="w-full rounded-sm"
					/>
					<div className="absolute rounded-sm flex items-center w-full h-full left-0 top-0 bg-gradient-to-t from-[#757373] to-[rgba(21, 21, 21, 0)]">
						<div className="w-full md:w-1/2 mx-auto h-full flex flex-col items-center justify-center text-white space-y-7">
							<h2 className="text-6xl text-[#262A53] font-bold text-center">
								Race into A World of Car Toy Thrills!!
							</h2>
							<p className="text-center">
								Rev up your excitement and dive into a world of
								Car Toy Thrills! Experience the thrill of
								high-speed races and unlock your inner champion.
								Get ready to accelerate into an adventure like
								no other!
							</p>
							<div className="space-x-5">
								<button className="btn bg-[#262A53] text-[#FFE3E3]">
									Order Now!
								</button>
							</div>
						</div>
					</div>

					<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide4" className="btn btn-circle mr-5">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img
						src="https://images.pexels.com/photos/97355/pexels-photo-97355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						className="w-full rounded-sm"
					/>
					<div className="absolute rounded-sm flex items-center w-full h-full left-0 top-0 bg-gradient-to-t from-[#757373] to-[rgba(21, 21, 21, 0)]">
						<div className="w-full md:w-1/2 mx-auto h-full flex flex-col items-center justify-center text-white space-y-7">
							<h2 className="text-6xl text-[#262A53] font-bold text-center">
								Race into A World of Car Toy Thrills!!
							</h2>
							<p className="text-center">
								Rev up your excitement and dive into a world of
								Car Toy Thrills! Experience the thrill of
								high-speed races and unlock your inner champion.
								Get ready to accelerate into an adventure like
								no other!
							</p>
							<div className="space-x-5">
								<button className="btn bg-[#262A53] text-[#FFE3E3]">
									Order Now!
								</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide1" className="btn btn-circle mr-5">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img
						src="https://images.pexels.com/photos/54277/pexels-photo-54277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						className="w-full rounded-xl"
					/>
					<div className="absolute rounded-sm flex items-center w-full h-full left-0 top-0 bg-gradient-to-t from-[#757373] to-[rgba(21, 21, 21, 0)]">
						<div className="w-full md:w-1/2 mx-auto h-full flex flex-col items-center justify-center text-white space-y-7">
							<h2 className="text-6xl text-[#262A53] font-bold text-center">
								Race into A World of Car Toy Thrills!!
							</h2>
							<p className="text-center">
								Rev up your excitement and dive into a world of
								Car Toy Thrills! Experience the thrill of
								high-speed races and unlock your inner champion.
								Get ready to accelerate into an adventure like
								no other!
							</p>
							<div className="space-x-5">
								<button className="btn bg-[#262A53] text-[#FFE3E3]">
									Order Now!
								</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide2" className="btn btn-circle mr-5">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img
						src="https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						className="w-full rounded-xl"
					/>
					<div className="absolute rounded-sm flex items-center w-full h-full left-0 top-0 bg-gradient-to-t from-[#757373] to-[rgba(21, 21, 21, 0)]">
						<div className="w-full md:w-1/2 mx-auto h-full flex flex-col items-center justify-center text-white space-y-7">
							<h2 className="text-6xl text-[#262A53] font-bold text-center">
								Race into A World of Car Toy Thrills!!
							</h2>
							<p className="text-center">
								Rev up your excitement and dive into a world of
								Car Toy Thrills! Experience the thrill of
								high-speed races and unlock your inner champion.
								Get ready to accelerate into an adventure like
								no other!
							</p>
							<div className="space-x-5">
								<button className="btn bg-[#262A53] text-[#FFE3E3]">
									Order Now!
								</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide3" className="btn btn-circle mr-5">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
