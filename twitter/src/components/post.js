import { Avatar } from '@material-ui/core'
import Verified from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './post.css';
import PublishIcon from '@mui/icons-material/Publish';
import React, { forwardRef } from 'react';
import { FavoriteBorder } from '@material-ui/icons';

const post = forwardRef(({
    displayName, username, verified, text, image, avatar
}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className="post_header_text">
                        <h3>{displayName} <span>
                            {verified && <Verified className="badge" />}
                        </span>
                        </h3>
                        <p>@{username} . Apr 24 </p>
                    </div>

                    <div className='post_header_descrtiption'>
                        <p>{text}</p>
                    </div>
                </div>

                {image && <img src={image} alt="img" />}
                <div className="post__footer">

                    <ChatBubbleOutlineIcon fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
})

export default post