import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { posts, loading } = useSelector((state) => state.post);

	return loading ? (
		<Spinner />
	) : (
		<>
			<h1 className='large text-primary'>Posts</h1>{' '}
			<p className='lead'>
				<i className='fas fa-user'> Welcome to the community</i>
			</p>
			<PostForm />
			<div className='posts'>
				{posts.map((post) => (
					<PostItem key={post._id} post={post} />
				))}
			</div>
		</>
	);
};

export default Posts;
