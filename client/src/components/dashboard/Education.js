import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import Moment from 'react-moment';

const Education = () => {
	const education = useSelector((state) => state.profile.profile.education);

	const dispatch = useDispatch();

	const onClick = (e, id) => {
		dispatch(deleteEducation(id));
	};

	const educations = education.map((edu) => (
		<tr key={edu._id}>
			<td>{edu.school}</td>
			<td className='hide-sm'>{edu.degree}</td>
			<td>
				<Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
				{edu.to === null || edu.to === '' ? (
					' Now'
				) : (
					<Moment format='YYYY/MM/DD'>{edu.to}</Moment>
				)}
			</td>
			<td>
				<button className='btn btn-danger' onClick={(e) => onClick(e, edu._id)}>
					Delete
				</button>
			</td>
		</tr>
	));
	return (
		<>
			<h2 className='my-2'>Education Credentials</h2>
			<table className='table'>
				<thead>
					<tr>
						<th>School</th>
						<th className='hide-sm'>Degree</th>
						<th className='hide-sm'>Years</th>
						<th />
					</tr>
				</thead>
				<tbody>{educations}</tbody>
			</table>
		</>
	);
};

export default Education;
