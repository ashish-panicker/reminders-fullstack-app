// routes.js , stores all the routes in my application

import { createBrowserRouter as browserRouter } from 'react-router'
import Login from './components/Login'
import Register from './components/Register'
import Layout from './pages/Layout'
import Home from './components/Home'

const routes = [
	{
		Component: Layout,
		children: [
			{ path: '/', Component: Home },
			{ path: '/login', Component: Login },
			{ path: '/register', Component: Register },
			{ path: '/logout', Component: Register },
		],
	},
]

export const router = browserRouter(routes)
