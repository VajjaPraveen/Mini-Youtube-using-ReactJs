import { Component } from "react";
import NxtSideBar from "../NxtSideBar";
import NxtHeader from "../NxtHeader";
import Cookies from "js-cookie";
import NxtGamingCard from "../NxtGamingCard";
import NotFound from "../NotFound";
import NxtWrapper from "../NxtWrapper";
import { ColorRing } from "react-loader-spinner";

const apiStatusConstants = {
    INITIAL: 'INITIAL',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    LOADING: 'LOADING'
}
class NxtGaming extends Component {
    state = { videosList: [], apiStatus: apiStatusConstants.INITIAL }
    componentDidMount() {
        this.getVideosList()
    }
    getVideosList = async () => {
        this.setState({ apiStatus: apiStatusConstants.LOADING })
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken === undefined) {
            return null
        }
        const apiUrl = `https://apis.ccbp.in/videos/gaming`
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
                viewCount: eachVideo.view_count,
            }))
            this.setState({ apiStatus: apiStatusConstants.SUCCESS, videosList: modifiedData })
        }
        else {
            this.setState({ apiStatus: apiStatusConstants.FAILURE })
        }
    }
    getHomeVideosSuccessView = () => {
        let { videosList } = this.state
        return (<>
            {/* <NxtHeader /> */}
            <NxtWrapper/>
            <div className="NxtGamingWholeContainer">
                <NxtSideBar />
                <div>
                    <h1 className="TrendingTitle">Gaming</h1>
                    <div className="NxtHomeVideoCardsWrapping">
                        {videosList.map((eachVideo) => <NxtGamingCard key={eachVideo.id} eachVideo={eachVideo} />)}
                    </div>

                </div>
            </div>
        </>)
    }
    getHomeVideosFailureView = () => {
        <>
            {/* <NxtHeader /> */}
            <NxtWrapper/>
            <div className="NxtGamingWholeContainer">
                <NxtSideBar />
                <div>
                    <h1 className="TrendingTitle">Gaming</h1>
                    <NotFound />
                </div>
            </div>
        </>
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
                return this.getHomeVideosFailureView()
            case apiStatusConstants.LOADING:
                return this.getLoadingView()

            default:
                break;
        }


    }
}
export default NxtGaming
