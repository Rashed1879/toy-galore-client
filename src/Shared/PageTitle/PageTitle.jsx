/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet';

const PageTitle = ({ title }) => {
	return (
		<Helmet>
			<title>Toy Galore | {title}</title>
		</Helmet>
	);
};

export default PageTitle;
