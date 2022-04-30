import React, { useEffect, useState } from 'react';
import './Feed.css'
import Tweetbox from '../components/Tweetbox';
import Post from "../components/post.js";
import Footer from "../components/footer.js";
import { Avatar } from '@material-ui/core'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import db from '../firebase';
import FlipMove from 'react-flip-move'

function Feed(props) {


  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))


  }, [])

  console.log(posts)
  return (
    <div className='feed'>
      <div className='feed-header'>
        <Avatar onClick={props.toggle} className="avatar" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />

        <h2>Home</h2>
        <AutoAwesomeIcon className="awIcon" />
      </div>
      <div className="tweet-box" >
        <Tweetbox />
      </div>
      <FlipMove>
        {
          posts.map((post, i) => (
            <Post
              key={i}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              image={post.image}
              avatar={post.avatar}

            />
          ))
        }
      </FlipMove>


      <div className='feed-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Feed;