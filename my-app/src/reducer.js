export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //remove after being developed
    //token :'BQAR0C_L_RqQB41Cz-CSzFCoYQR59hyT26iTqYmnNrSgMe4-hiIICcCtJW8lRdTfpTM47uTHg4B4yKbmG3rsXnHGUCDAxNJNL8xX421P2eGWjgybjwJHlEIwchFeeTNF_iqS7ctLnFrVHqb7CpZJHZUeHm-XadYcluLa_f7BgRChTeFvVuNr'
    
};
const reducer=(state,action)=>{
console.log(action);
 switch(action.type){
     case 'SET_USER':
         return{
             ...state,
             user:action.user,
         };
      case 'SET_TOKEN':
          return{
              ...state,
              token:action.token,
          };   
      case 'SET_PLAYLISTS':
           return{
                  ...state,
                  playlists:action.playlists,
              };
       case 'SET_GOAT':
           return{
               ...state,
               goat:action.goat,
           };       
         default:
             return state;
 }
};
export default reducer;