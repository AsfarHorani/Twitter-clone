import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@material-ui/core'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./toggleSidebar.css";
import SidebarOption from './SidebarOption';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function toggleSidebar(props) {
    return (
        <div className={props.open? 'toggleSidebar active' : 'toggleSidebar' }>
            <div className="tsb-header">
                <div>
                    <h4>Account Info</h4>
                    <CloseIcon onClick={props.toggle} />
                </div>
                <div>
                    <Avatar />
                    <AddCircleOutlineIcon />
                </div>
                <div className='name'>
                    <p>Asfar</p>
                    <span className='greycolorfont'>@Asfii1122655</span>
                </div>
                <div className="foll">
                    <p>20 <span className='greycolorfont' >Following</span></p>
                    <p>101 <span className='greycolorfont' >Followers</span></p>
                </div>
            </div>
            
            <nav>
                <SidebarOption text="profile" Icon={PersonIcon}/>
                <SidebarOption text="List" Icon={ListAltIcon}/>
                <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
              
            </nav>

        </div>
    )
}

export default toggleSidebar