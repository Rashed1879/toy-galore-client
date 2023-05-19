import Banner from './Banner';
import ExtraSection from './ExtraSection';
import Gallery from './Gallery';

const Home = () => {
	return (
		<div>
			{/* Banner Section */}
			<Banner></Banner>
			{/* Gallery Section */}
			<Gallery></Gallery>
			{/* Extra Sections */}
			<ExtraSection></ExtraSection>
		</div>
	);
};

export default Home;
