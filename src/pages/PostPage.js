// External imports
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Local imports
import Comment from "../components/Comment";
import { fetchPost } from "../actions/postActions";
import { fetchComments } from "../actions/commentsActions";

export default function PostPage() {
  const post = useSelector((state) => state.post);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  let { postID } = useParams();

  useEffect(() => {
    dispatch(fetchPost(postID));
    dispatch(fetchComments(postID));
  }, [dispatch, postID]);

  const renderPost = () => {
    if (post.loading) return <p>Loading post...</p>;
    if (post.hasErrors) return <p>Unable to get post</p>;
    return (
      <article className="post">
        <h2>{post.post.title}</h2>
        <p>{post.post.body}</p>
      </article>
    );
  };

  const renderComments = () => {
    if (comments.loading) return <p>Loading comments...</p>;
    if (comments.hasErrors) return <p>Unable to get comments</p>;
    return comments.comments.map((comment) => (
      <Comment email={comment.email} body={comment.body} key={comment.id} />
    ));
  };

  return (
    <section>
      {renderPost()}
      <h2>Comments</h2>
      {renderComments()}
    </section>
  );
}
