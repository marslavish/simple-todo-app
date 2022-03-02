import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";
// import { Outlet } from "react-router-dom";

function PostsPage() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (posts.loading) return <p>Loading posting...</p>;
    if (posts.hasErrors) return <p>Unable to display posts.</p>;
    return posts.posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
      {/* <Outlet /> */}
    </section>
  );
}

export default PostsPage;
