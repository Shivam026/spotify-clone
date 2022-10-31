import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
function Body({spotify})
{
   const[{goat},dispatch]=useDataLayerValue();
   return(
     <div className="body">  
     <Header spotify={spotify}/>
     <div className="body_info">
        <img src={goat?.images[0].url} alt="goat"/>
        <div className="body_infoText">
           <strong>PlayList</strong>
           <h2>GOAT</h2>
           <p>{goat?.description}</p>

        </div>
       
         
        </div>
        <div className="body_songs">
           <div className="body_icons">
           <PlayCircleFilledIcon className="body_shuffle" />
           <FavoriteIcon  fontSize="large"/>
           <MoreHorizIcon />
           </div>
           {goat?.tracks.items.map((item)=>(
              <SongRow track={item.track} />
           
           ))}
     </div>
    </div>
   ) ;
}
export default Body;