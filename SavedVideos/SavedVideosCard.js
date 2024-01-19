import { Component } from "react";

class NxtSavedVideosCard extends Component {

    render() {
        let { eachVideo } = this.props
        let { id, title, thumbnail_url, channel, view_count, publishedAt } = eachVideo
        let { name, profile_image_url } = channel
        return (<div className="NxtSavedVideoCardWholeContainer">
            <img src={thumbnail_url} alt="thumbnailUrl" className="VideoThumbnailImage"></img>
            <div className="videoProfileContainer">
                <div className="NxtSavedVideoProfileData">
                    <h1>{title}</h1>
                    <h1>{name}</h1>
                    <div className="NxtViewCount">
                        <p>{view_count} Views</p>
                        <p>{publishedAt}</p>
                    </div>

                </div>
            </div>
        </div>)
    }
}
export default NxtSavedVideosCard
