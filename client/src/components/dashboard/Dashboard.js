import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrentProfile());
	}, [dispatch]);

	const auth = useSelector((state) => state.auth);

	const { profile, loading } = useSelector((state) => state.profile);

	return loading && profile === null ? (
		<Spinner />
	) : (
		<>
			<h1 className='large text-primary'>Dashboard</h1>
			<p className='lead'>
				<i className='fas fa-user' /> Welcome {auth.user && auth.user.name}
			</p>
			{profile !== null ? (
				<>
					<DashboardActions />
					<Experience />
					<Education />

					<div className='my-2'>
						<button
							className='btn btn-danger'
							onClick={() => dispatch(deleteAccount())}
						>
							<i className='fas fa-user-minus' /> Delete my account
						</button>
					</div>
				</>
			) : (
				<>
					<p>You have not yet setup a profile, please add some info</p>
					<Link to='/create-profile' className='btn btn-primary my-1'>
						Create Profile
					</Link>
				</>
			)}
		</>
	);
};

export default Dashboard;
