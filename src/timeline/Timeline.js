import React, { useState } from 'react';
import "./Timeline.css";  
import Suggestions from './Suggestions';
import Post from './posts/Post';

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "Kante",
            postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hwqSa-83Oxmq_1gPXvGS5L3XgZbbM3YqWRpeu2Y_QGWKBzAuMBarxfBV9LLwksS7ELg&usqp=CAU",
            likes: 652,
            timestamp: "1d"
        },
        {
            user: "Messi ",
            postImage: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb6caf4f8bb6dface/60dc10a7993b043846449946/5f27af6bee8c2ec7981a77519a0ae258bd346068.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            likes: 977,
            timestamp: "11h"
        },
        {
            user: "Zidane ",
            postImage: "https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg",
            likes: 977,
            timestamp: "3h"
        },
        {
            user: "Hazard",
            postImage: "https://notjustok.com/wp-content/uploads/2023/10/20231010_111825-scaled.jpg",
            likes: 588,
            timestamp: "28min"
        },
    ]);
  return (
    <div className="timeline">
        
    <div className="timeline__left">
    <div className="timeline__posts">
        {posts.map(post=> (
            <Post user = {post.user} 
             postImage={post.postImage} 
             likes={post.likes} 
            timestamp={post.timestamp} />

        ))}
    </div>
        </div> 
    <div className="timeline__right">
    <Suggestions />
        </div>
    </div> 
  );
}
export default Timeline;

