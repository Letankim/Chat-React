import React from "react";
import PostItem from "../PostItem";
import PropTypes from "prop-types";

const PostList = ({posts}) => {
  return (
    <div className="row">
        {posts.length > 0 && posts.map(post => (
            <PostItem post={post}/>
        ))}
    </div>
  );
};

PostList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PostList;
