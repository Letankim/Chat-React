import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostItem = ({post}) => {
  return (
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.name}</h5>
          <p>{post.startDate}</p>
          <p className="card-text">
            {post.description}
          </p>
          <Link to={`/post/${post.id}`}>Go to post</Link>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostItem;
