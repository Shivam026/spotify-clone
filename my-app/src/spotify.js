export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri="http://localhost:3000/";
const clientId="5961e0aecf144f4390909e1537c0abfa";
const scopes=[
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-playback-state",
    "playlist-read-private",
    

];
export const getTokenFromUrl = () =>{
    return window.location.hash
           .substring(1)
           .split("&")
           .reduce((initial,item)=>{
             var parts=item.split("=");
             initial[parts[0]]=decodeURIComponent(parts[1]);
             //console.log(initial[parts[0]]);
             return initial;
           },{});
}
export const loginUrl= `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;