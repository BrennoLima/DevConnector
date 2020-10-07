import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ProfileItem = ({ pf }) => {
	const {
		user: { _id, name, avatar },
		status,
		company,
		location,
		skills,
	} = pf;

	return (
		<div className='profile bg-light'>
			<img src={avatar} alt='' className='round-img' />
			<div>
				<h2>{name}</h2>
				<p>
					{status} {company && <span> at {company}</span>}
				</p>
				<p className='my-1'>{location && <span>{location}</span>}</p>
				<Link to={`/profile/user/${_id}`} className='btn btn-primary'>
					View Profile{' '}
				</Link>
			</div>
			<ul>
				{skills.slice(0, 4).map((skill, index) => (
					<li key={index} className='p-1'>
						<i className='fas fa-check' /> {skill}
					</li>
				))}
			</ul>
		</div>
	);
};

ProfileItem.propTypes = {
	pf: PropTypes.object.isRequired,
};

export default ProfileItem;
