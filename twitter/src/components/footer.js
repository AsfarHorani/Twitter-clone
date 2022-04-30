import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import './footer.css'
function footer() {
  return (
     <div className='footer'>
        <HomeIcon/>
        <SearchIcon/>
        <NotificationsNoneIcon/>
        <MailOutlineIcon/>

     </div>
  )
}

export default footer