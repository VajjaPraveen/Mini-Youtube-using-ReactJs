import { Component } from "react";
import NxtSideBar from "../NxtSideBar";
import NxtHeader from "../NxtHeader";
import NxtPremium from "../NxtPremium";
import NxtHomeVideos from "../NxtHomeVideos";
import NxtWrapper from "../NxtWrapper";
class NxtHome extends Component {
    state={queryParameter:'',initialUserValue:''}
   
    changeInitialValue=(newValue)=>{
        this.setState({initialUserValue:newValue})
    }
    
    render() {
        
        return (<>
            <NxtWrapper/>
            <div className="NxtHomeContainer">
                <NxtSideBar />
                <div>
                    <NxtPremium />
                    <NxtHomeVideos />
                </div>
            </div>
        </>) 
    }
}
export default NxtHome
