// routes.js , stores all the routes in my application

import { createBrowserRouter as browserRouter } from 'react-router'
import Login from './components/Login'
import Register from './components/Register'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Logout from './components/Logout'
import UserHomePage from './pages/UserHome'

const routes = [
	{
		Component: Layout,
		children: [
			{ path: '/', Component: Home },
			{ path: '/login', Component: Login },
			{ path: '/register', Component: Register },
			{ path: '/home', Component: UserHomePage },
			{ path: '/logout', Component: Logout },
		],
	},
]

export const router = browserRouter(routes)
