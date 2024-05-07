import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const {id} = useParams();
  const [post, setPost] = useState();
  useEffect(()=> {
    async function getPost() {
        const res = await fetch('/db.json');
        const data = await res.json();
        console.log(data.projects);
        const currentPost = data.projects.filter(p => p.id == id);
        setPost(currentPost[0]);
    } 
    getPost();
  }, [])
  const navigate = useNavigate();
  
  return (
    <div>
      {(post == null || post == undefined) && (navigate('/404'))}
      {(post != null || post !== undefined) && (
        <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{post.name}</h5>
            <p>{post.startDate}</p>
            <p className="card-text">
              {post.description}
            </p>
          </div>
        </div>
      </div>
      )}
    </div>
  )
};

export default PostDetail
