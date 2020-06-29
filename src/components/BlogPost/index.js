import React from 'react';
import './style.css';
import Card from '../UI/Card';

function BlogPost(props) {
    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                <sapn>Featured</sapn>
                <h1 className="postTitle">Beautiful is always beautiful</h1>
                <span>posted on July 20, 2016 by Sarah Blogging Tips</span>

                </div>
            </Card>
        </div>
    )
}

export default BlogPost