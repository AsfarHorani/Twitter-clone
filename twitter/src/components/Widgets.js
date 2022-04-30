import React from 'react'
import './Widgets.css';
import {TwitterTimelineEmbed    , TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
    return (
        <div className='widgets' >
          <div className='widgets_input'>
              <SearchIcon className="widgets_searchIcon" />
              <input type="text" placeholder='Search Twitter'/>
          </div>

          <div  className="widgets_widgetContainer">
              <h2>Whats Happening?</h2>
              <TwitterTweetEmbed  tweetId={"1518500521115480069"} />
              <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
          <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
          </div>
          
        </div>  
    )
}

export default Widgets