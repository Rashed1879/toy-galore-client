import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import AddToy from '../pages/AddToy/AddToy';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Blogs from '../pages/Blogs/Blogs';
import AllToy from '../pages/AllToy/AllToy';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: 'addtoys',
				element: <AddToy></AddToy>,
			},
			{
				path: 'alltoy',
				element: <AllToy></AllToy>,
			},
			{
				path: 'blogs',
				element: <Blogs></Blogs>,
			},
			{
				path: 'register',
				element: <Register></Register>,
			},
			{
				path: 'login',
				element: <Login></Login>,
			},
		],
	},
]);

export default router;
