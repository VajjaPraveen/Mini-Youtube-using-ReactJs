import { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useParams } from "react-router-dom";
import NxtHome from "./Components/NxtHome";
import NxtTrending from "./Components/NxtTrending";
import NxtLoginForm from "./Components/NxtLoginForm";
import NxtGaming from "./Components/NxtGaming";
import NxtSavedVideos from "./Components/NxtSavedVideos";
import NxtProtectedRoute from "./Components/NxtProtectedRoute";
import NotFound from "./Components/NotFound";
import NxtVideoDetails from "./Components/NxtVideoDetails";
import NxtContext from "./Components/NxtContext";

import { useNavigate } from "react-router-dom";
class App extends Component {

  state={videosCart:[],isDark:false,isSaved:false}
  render() {
    let {videosCart,isDark,isSaved}=this.state
    const LoginWrapper = (props) => {
      const Navigate = useNavigate()
      return <NxtLoginForm Navigate={Navigate} />
    }
    const VideoDetailsWrapper=(props)=>{
      const params=useParams()
      return <NxtVideoDetails {...{...props,match:params}}/>
    }
    const addVideoToCart=(addedVideo)=>{
        let {videosCart}=this.state
        videosCart.forEach((eachVal)=>{
            if (eachVal.isSaved){
                videosCart.isSaved=false
            }
            else if(eachVal.isSaved===false){
                videosCart.isSaved=true
            }
            
        })
        this.setState((prevState)=>({videosCart:[...prevState.videosCart,addedVideo]}),console.log(videosCart))
    }
    const changeTheme=()=>{
        this.setState((prevState)=>({isDark:!prevState.isDark}))
    }
   
    return (<BrowserRouter>
      
      <NxtContext.Provider value={{videosCart:videosCart,addVideoToCart:addVideoToCart,isDarkTheme:isDark,changeTheme:changeTheme}}>
      <Routes>
      
      <Route path="/login" element={<LoginWrapper />} />
        <Route element={<NxtProtectedRoute />}>
        
          <Route path="/" element={<NxtHome />} />
          <Route path="/trending" element={<NxtTrending />} />
          <Route path="/gaming" element={<NxtGaming />} />
          <Route path="/saved-videos" element={<NxtSavedVideos />} />
          <Route path="/videos/:id" element={<VideoDetailsWrapper />} />
          
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </NxtContext.Provider>
    </BrowserRouter>)
  }
}
export default App
