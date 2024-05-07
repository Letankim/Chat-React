import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";

const Post = () => {
  const [post, setPost] = useState([]);
  useEffect(()=> {
    async function getPost() {
        const res = await fetch("/db.json");
        const post = await res.json();
        setPost(post.projects);
    }
    getPost();
  }, [])
  return (
    <div>
      <h2>This is all project</h2>
      <PostList posts={post} />
    </div>
  )
};

export default Post
