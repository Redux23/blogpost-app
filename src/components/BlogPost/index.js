import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

function BlogPost(props) {

const[post, setPost] = useState({});

    useEffect(() => {
        const postId = props.match.params.postId;
        blogPost.data.find(post=>post.id == postId)
        setPost(post)
    });

    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <sapn className="blogCategory">Featured</sapn>
    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy"> posted on July 20, 2016 by Sarah Blogging Tips</span>

                </div>

                <div className="postImgContainer">
                    <img src={require("../../blogPostImages/img_19.jpg")} alt="post" />
                </div>

                <div className="postContent">
                    <h3>Post Title</h3>
                    <p>lorem ipsum</p>
                </div>
            </Card>
        </div>
    )
}

export default BlogPost