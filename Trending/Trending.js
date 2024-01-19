import { Component } from "react";
import NxtHeader from "../NxtHeader";
import NxtTrendingVideos from "../NxtTrendingVideos";
import NxtSideBar from "../NxtSideBar";
import NxtWrapper from "../NxtWrapper";
class NxtTrending extends Component {
    render() {
        let { queryParameter } = this.props
        return (<>
            {/* <NxtHeader /> */}
            <NxtWrapper/>
            <div className="NxtTrendingContainer">
                <NxtSideBar />
                <div>
                    <h1 className="TrendingTitle">Trending</h1>
                    <NxtTrendingVideos queryParameter={queryParameter} />
                </div>
                
            </div>
        </>)
    }
}
export default NxtTrending
