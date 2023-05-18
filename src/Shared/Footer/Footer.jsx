import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className="footer p-10 bg-[#262A53] text-white">
			<div>
				<div className="bg-[#FFE3E3] rounded-full">
					<img
						src="../../../public/images/ToyGalore.png"
						alt=""
						className="w-48 h-12"
					/>
				</div>
				<p>
					Toy Galore Ltd.
					<br />
					Providing Baby Toys since 1992
				</p>
				<p>Copyright © 2023 - All right reserved by Toy Galore Ltd</p>
			</div>
			<div>
				<span className="footer-title">Contact Us</span>
				<p>Call : 1-500-268-366</p>
				<p>Email : tg@customer.com</p>
				<p>(8AM-5PM CST M-Th 8AM-12PM CST F)</p>
			</div>
			<div>
				<span className="footer-title">Social</span>
				<div className="flex flex-row space-x-3">
					<Link to="#" className="link link-hover">
						<BsFacebook className="text-xl" />
					</Link>
					<Link to="#" className="link link-hover">
						<BsTwitter className="text-xl" />
					</Link>
					<Link to="#" className="link link-hover">
						<BsInstagram className="text-xl" />
					</Link>
				</div>
			</div>
			<div>
				<span className="footer-title">Address</span>
				<p>Toy Galore Baby Toy Shop</p>
				<p>Shop No-5, Level-3,Block-E</p>
				<p>Wonderland Tower, California, USA</p>
			</div>
		</footer>
	);
};

export default Footer;
