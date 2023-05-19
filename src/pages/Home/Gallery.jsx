import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	const images = [
		'https://images.pexels.com/photos/3991204/pexels-photo-3991204.jpeg?auto=compress&cs=tinysrgb&w=600',
		'https://images.pexels.com/photos/6642328/pexels-photo-6642328.jpeg?auto=compress&cs=tinysrgb&w=600',
		'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
		'https://images.pexels.com/photos/9227214/pexels-photo-9227214.jpeg?auto=compress&cs=tinysrgb&w=600',
		'https://images.pexels.com/photos/242200/pexels-photo-242200.jpeg?auto=compress&cs=tinysrgb&w=600',
		'https://images.pexels.com/photos/2527931/pexels-photo-2527931.jpeg?auto=compress&cs=tinysrgb&w=600',
		'https://images.pexels.com/photos/45846/toy-car-mini-cooper-beach-45846.jpeg?auto=compress&cs=tinysrgb&w=600',
		'https://images.pexels.com/photos/555869/pexels-photo-555869.jpeg?auto=compress&cs=tinysrgb&w=600',
	];

	return (
		<div className="my-5 py-5">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-6 text-center">
					Car Toy Showcase: Explore Our Collection
				</h2>
				<div
					data-aos="zoom-in"
					data-aos-delay="200"
					data-aos-easing="ease-in-out"
					className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
				>
					{images.map((image, index) => (
						<div key={index} className="relative">
							<img
								src={image}
								alt={`Image ${index + 1}`}
								className="rounded-lg w-full h-full"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
