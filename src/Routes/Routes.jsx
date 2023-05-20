import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import AddToy from '../pages/AddToy/AddToy';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Blogs from '../pages/Blogs/Blogs';
import AllToy from '../pages/AllToy/AllToy';
import PrivateRoute from './PrivateRoute';
import ToyDetails from '../pages/ToyDetails/ToyDetails';
import MyToys from '../pages/MyToys/MyToys';
import Update from '../pages/Update/Update';

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
				element: (
					<PrivateRoute>
						<AddToy></AddToy>
					</PrivateRoute>
				),
			},
			{
				path: 'alltoy',
				element: <AllToy></AllToy>,
			},
			{
				path: 'mytoys',
				element: (
					<PrivateRoute>
						<MyToys></MyToys>
					</PrivateRoute>
				),
			},
			{
				path: 'update/:id',
				element: <Update></Update>,
			},
			{
				path: 'toydetails/:id',
				element: (
					<PrivateRoute>
						<ToyDetails></ToyDetails>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://assignment-11-server-ruby-three.vercel.app/toydetails/${params.id}`
					),
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
