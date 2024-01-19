import { Component } from "react";
import NxtHeader from "../NxtHeader";
import NxtContext from "../NxtContext";
import NxtSideBar from "../NxtSideBar";
import NxtSavedVideosCard from "../NxtSavedVideosCard";
import NxtWrapper from "../NxtWrapper";
class NxtSavedVideos extends Component {
    render() {
        return (<NxtContext.Consumer>
            {value => {
                let { videosCart } = value

                return (<>
                    {/* <NxtHeader /> */}
                    <NxtWrapper/>

                    <div className="NxtSavedContainer">
                        <NxtSideBar />
                        {videosCart.length > 0 ? <div>
                            <h1 className="SavedVideosHeading">Saved videos</h1>
                            <div className="NxtSavedMiniContainer">
                                {videosCart.map((eachVideo) => <NxtSavedVideosCard key={eachVideo.id} eachVideo={eachVideo} />)}
                            </div>
                        </div> :
                            <div className="noSavedVideosContainer">
                                <h1 className="SavedVideosHeading">Saved videos</h1>
                                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png " alt="noSavedVideos" className="noSavedVideos"></img>
                            </div>}
                    </div>
                </>)
            }}

        </NxtContext.Consumer>
        )
    }
}
export default NxtSavedVideos
