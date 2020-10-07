import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const loading = useSelector((state) => state.loading);

	const onClick = (e) => {
		dispatch(logout());
	};
	const authLinks = (
		<ul>
			<li>
				<Link to='/profiles'>Developers</Link>
			</li>
			<li>
				<Link to='/dashboard'>
					<i className='fas fa-user' />
					<span className='hide-sm'> Dashboard</span>
				</Link>
			</li>
			<li>
				<a onClick={(e) => onClick(e)} href='#!'>
					<i className='fas fa-sign-out-alt' />
					<span className='hide-sm'> Logout</span>
				</a>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul>
			<li>
				<Link to='/profiles'>Developers</Link>
			</li>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</ul>
	);
	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>
					<i className='fas fa-code'></i> DevConnector
				</Link>
			</h1>
			{!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
		</nav>
	);
};

export default Navbar;
