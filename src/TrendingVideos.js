import { Component } from "react";
import NxtHomeVideoCard from "../NxtHomeVideoCard";
import NotFound from "../NotFound";
import Cookies from "js-cookie";
import { ColorRing } from "react-loader-spinner";
const apiStatusConstants = {
    INITIAL: 'INITIAL',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    LOADING: 'LOADING'
}
class NxtTrendingVideos extends Component {
    state = { videosList: [], apiStatus: apiStatusConstants.LOADING }
    componentDidMount() {
        this.getVideosList()
    }
    getVideosList = async () => {
        this.setState({ apiStatus: apiStatusConstants.LOADING })
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken === undefined) {
            return null
        }
        
       const apiUrl=`https://apis.ccbp.in/videos/trending`
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }
        const response = await fetch(apiUrl, options)
        if (response.ok) {
            const data = await response.json()

            const modifiedData = data.videos.map((eachVideo) => ({
                id: eachVideo.id,
                title: eachVideo.title,
                thumbnailUrl: eachVideo.thumbnail_url,
                channel: eachVideo.channel,
                viewCount: eachVideo.view_count,
                publishedAt: eachVideo.published_at
            }))
            this.setState({ apiStatus: apiStatusConstants.SUCCESS, videosList: modifiedData })
        }
        else {
            this.setState({ apiStatus: apiStatusConstants.FAILURE })
        }
    }
    getHomeVideosSuccessView = () => {
        let { videosList } = this.state
        return (
            <div className="NxtHomeVideoCardsWrapping">
                {videosList.map((eachVideo) => <NxtHomeVideoCard key={eachVideo.id} eachVideo={eachVideo} />)}
            </div>
        )
    }
    getLoadingView = () => {
        return (
            <div className="NxtGetLoadingView">
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>)
    }
    render() {
        let { apiStatus } = this.state
        switch (apiStatus) {
            case apiStatusConstants.SUCCESS:
                return this.getHomeVideosSuccessView()
            case apiStatusConstants.FAILURE:
                return <NotFound />
            case apiStatusConstants.LOADING:
                return this.getLoadingView()


            default:
                break;
        }


    }
}
export default NxtTrendingVideos
