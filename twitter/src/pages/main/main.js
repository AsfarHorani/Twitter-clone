import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed';
import Widgets from '../../components/Widgets';
import ToggleSidebar from '../../components//toggleSidebar';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Link } from "react-router-dom";
function Main() {
    const [openSidebar,setOpenSidebar] = useState(false);

  const toggleSidebar=()=>{
    console.log(openSidebar)
    setOpenSidebar(!openSidebar);
  }

  return (
    <>
       <Sidebar/>
      <ToggleSidebar toggle={toggleSidebar} open={openSidebar} /> 
      <Feed toggle={toggleSidebar}/>
      <Widgets/>
      <Link to="compose-tweet"><RateReviewIcon className="wt-icon"/></Link>  
    </>
  )
}

export default Main