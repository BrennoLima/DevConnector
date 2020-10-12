import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Momment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
	postId,
	comment: { _id, text, name, avatar, user, date },
}) => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	return (
		<div className='post bg-white p-1 my-1'>
			<div>
				<Link to={`/profile/user/${user}`}>
					<img className='round-img' src={avatar} alt='' />
					<h4>{name}</h4>
				</Link>
			</div>
			<div>
				<p className='my-1'>{text}</p>
				<p className='post-date'>
					Posted on <Momment fomart='MM/DD/YYYY'>{date}</Momment>
				</p>
				{!auth.loading && auth.user._id === user && (
					<button
						type='button'
						className='btn btn-danger'
						onClick={(e) => dispatch(deleteComment(postId, _id))}
					>
						<i className='fas fa-times'></i>
					</button>
				)}
			</div>
		</div>
	);
};
export default CommentItem;
