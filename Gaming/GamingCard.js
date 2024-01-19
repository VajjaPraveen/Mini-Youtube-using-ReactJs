import { Component } from "react";

class NxtGamingCard extends Component {
    render() {
        let { eachVideo } = this.props
        let {title, thumbnailUrl, viewCount } = eachVideo
        return (<div className="videoCardWholeContainer">
            <img src={thumbnailUrl} alt="thumbnailUrl" className="VideoThumbnailImage"></img>
            <div className="videoProfileContainer">
                <div className="videoProfileData">
                    <h1>{title}</h1>
                    <div className="NxtViewCount">
                        <p>{viewCount} Views</p>
                        
                    </div>

                </div>
            </div>
        </div>)
    }
}
export default NxtGamingCard
