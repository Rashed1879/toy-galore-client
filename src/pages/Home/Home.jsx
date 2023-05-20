import Banner from './Banner';
import ExtraSection from './ExtraSection';
import Gallery from './Gallery';
import SubCategory from './SubCategory';

const Home = () => {
	return (
		<div>
			{/* Banner Section */}
			<Banner></Banner>
			{/* Gallery Section */}
			<Gallery></Gallery>
			{/* Shop By Sub Category Section */}
			<SubCategory></SubCategory>
			{/* Extra Sections */}
			<ExtraSection></ExtraSection>
		</div>
	);
};

export default Home;
