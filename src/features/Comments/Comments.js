import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from './commentsSlice';
import styles from './Comments.module.css';

const Comments = ({ postId }) => {
    const dispatch = useDispatch();

    const comments = useSelector((state) => state.comments.comments);
    const status = useSelector((state) => state.comments.status);
    const error = useSelector((state) => state.comments.error);

    useEffect(() => {
        if (postId) {
            dispatch(fetchComments(postId));
        }
    }, [dispatch, postId]);

    if (status === 'loading') {
        return <h1 className ={styles.loading}>Loading comments...</h1>
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>
    }

    return (
        <div className={styles.commentbox}>
            <hr></hr>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment.id} className={styles.comment}>
                        <h4>{comment.author}</h4>
                        <p>{comment.body}</p>
                    </div>
                ))
            ) : (
                <p>No comments available</p>
            )}

        </div>
    );

};

export default Comments;