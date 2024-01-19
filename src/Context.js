import React from "react";
const NxtContext = React.createContext({
    videosCart: [],
    isDarkTheme:false,
    addVideoToCart:()=>{},
    changeTheme:()=>{},
})
export default NxtContext
