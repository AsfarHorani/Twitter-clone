import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Tweetbox.css';
import db from '../firebase';
import { useNavigate } from 'react-router-dom';
function Tweetbox() {
    const navigate = useNavigate();
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet=(e)=>{
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Mahnoor",
            username: "Qazi",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
              "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
          })

          setTweetMessage("");
    setTweetImage("");
    navigate('/');

    }

    return (
        <div className='tweetbox' >

            <form>
                <div className='tweet-input' >
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    <input
                        className="tweetbox_input"
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />

                </div>
                <input 
                className="tweetbox_input"
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                placeholder="Optional: Enter image URL"
                type="text" />
                <Button className="tweetBox_TweetButton" 
                  onClick={sendTweet}
                  type="submit"
                  >Tweet</Button>
            </form>

        </div>
    )
}

export default Tweetbox