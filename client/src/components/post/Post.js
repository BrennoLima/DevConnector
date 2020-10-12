import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ match }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPost(match.params.postId));
	}, [dispatch, match.params.postId]);

	const { post, loading } = useSelector((state) => state.post);

	return (
		<div>
			{loading || post === null ? (
				<Spinner />
			) : (
				<>
					<Link to='/posts' className='btn'>
						Back
					</Link>
					<PostItem post={post} showActions={false} />
					<CommentForm postId={post._id} />
					<div className='comments'>
						{post.comments.map((comment) => (
							<CommentItem
								key={comment._id}
								comment={comment}
								postId={post._id}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};
export default Post;
