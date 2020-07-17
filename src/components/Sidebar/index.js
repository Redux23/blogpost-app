import React from 'react'
import './style.css'
import Card from '../UI/Card';

 function Sidebar() {
    return (
        <div className="sidebarContainer">
        <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
            <span>About Us</span>

        </div>
            <div className="profileImgContainer">
            <img src={require('../../blogPostImages/img_03.PNG')} alt="about pic" />

            </div>
            <div className="cardBody">
                <p className="personalBio">My name is Chinelo Udeka. I am Osi's girl and he is a software developer. He bought me with love.</p>

            </div>
        </Card>

        <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
            <span>Social Network</span>
        </div>
        </Card>

        <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
            <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
            <div className="recentPost">
                <h3>Post Title</h3>
                <span>July 21, 2018</span>
            </div>

            <div className="recentPost">
                <h3>Post Title</h3>
                <span>July 21, 2018</span>
            </div>
        </div>
        </Card>


        </div>
    )
}

export default Sidebar;