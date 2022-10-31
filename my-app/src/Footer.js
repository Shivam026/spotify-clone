import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid,Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
function Footer()
{
  return(
 <div className="footer">     
  <div className="footer_left">
    <img className="footer_albumlogo"
      src="https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Goat"
      />
      <div className="footer_songInfo">
      <p>Goat</p>
      </div>
     
  </div>
  <div className="footer_center">
     <ShuffleIcon className="footer__green"/>
     <SkipPreviousIcon className="footer__icon"/>
     <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
     <SkipNextIcon className="footer__icon"/>
     <RepeatIcon className="footer__green"/>
     
  </div>
  <div className="footer_right">
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider />
        </Grid>
      </Grid>
  </div>
</div>
  )  ;
}
export default Footer;