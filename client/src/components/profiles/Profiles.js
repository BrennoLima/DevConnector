import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = () => {
	const dispatch = useDispatch();
	const { profiles, loading } = useSelector((state) => state.profile);

	useEffect(() => {
		dispatch(getProfiles());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					{' '}
					<h1 className='large text-primary'>Developers</h1>
					<p className='lead'>
						<i className='fab fa-connectdevelop'>
							{' '}
							Browse and connect with developers
						</i>
					</p>
					<div className='profiles'>
						{profiles.length > 0 ? (
							profiles.map((profile) => (
								<ProfileItem key={profile._id} pf={profile} />
							))
						) : (
							<h4>No profiles found...</h4>
						)}
					</div>
				</>
			)}
		</>
	);
};
export default Profiles;
