import React, { useEffect } from "react"; 
import './App.css';
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify= new SpotifyWebApi();

function App() 
{
  
  const[{user,token},dispatch]=useDataLayerValue();
  useEffect(()=>{
   const hash =getTokenFromUrl();
   window.location.hash="";
   const _token=hash.access_token;
   if(_token)
   {
     dispatch({
       type:"SET_TOKEN",
       token:_token,
     })

     spotify.setAccessToken(_token);
     spotify.getMe().then((user)=>{
       console.log('show',user);
      dispatch({
        type:'SET_USER',
        user: user
      }); 
     });
     spotify
  .getUserPlaylists()
  .then((playlists) => {
    console.log("get playlists", playlists);
    dispatch({
      type: "SET_PLAYLISTS",
      playlists: playlists,
    });
  });
  spotify.getPlaylist('4yfnTkAIGIAWpvO220QGIC').then(response=>{
    dispatch({
      type:"SET_GOAT",
      goat:response,
    })
  });
   }
   
  },[]);
  
  return (
    <div className="App">
      {
        token?(<Player spotify={spotify}/>):(<Login />)
      }
      
    </div>
  );
}

export default App;
