import { JSX } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Footer from './components/Footer';

export default function App(): JSX.Element {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/Dashboard/:id' element={<Dashboard />} />
			</Routes>
			<Footer />
		</>
	);
}
