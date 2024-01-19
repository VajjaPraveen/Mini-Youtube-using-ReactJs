import { Component } from "react";
import { Link } from "react-router-dom";
class NxtHomeVideoCard extends Component {
    render() {
        let { eachVideo } = this.props
        let { id,title, thumbnailUrl, channel, viewCount, publishedAt } = eachVideo
        let { name, profile_image_url } = channel
        return (<Link to={`/videos/${id}`} className="NxtEachVideo">
        <div className="videoCardWholeContainer">
            <img src={thumbnailUrl} alt="thumbnailUrl" className="VideoThumbnailImage"></img>
            <div className="videoProfileContainer">
                <img src={profile_image_url} alt="profileUrl" className="VideoProfileImage"></img>
                <div className="videoProfileData">
                    <h1>{title}</h1>
                    <h1>{name}</h1>
                    <div className="NxtViewCount">
                        <p>{viewCount} Views</p>
                        <p>{publishedAt}</p>
                    </div>

                </div>
            </div>
        </div>
        </Link>)
    }
}
export default NxtHomeVideoCard
