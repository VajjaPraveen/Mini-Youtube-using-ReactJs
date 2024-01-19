import { Component } from "react";
import NxtHomeVideoCard from "../NxtHomeVideoCard";
import Cookies from "js-cookie";
import { ColorRing } from "react-loader-spinner";
import NxtSearch from "../NxtSearch";
const apiStatusConstants = {
    INITIAL: 'INITIAL',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    LOADING: 'LOADING'
}
class NxtHomeVideos extends Component {
    state = { videosList: [], queryParameter:'',apiStatus:apiStatusConstants.INITIAL }
    componentDidMount() {
        this.getVideosList()
    }

    getVideosList = async () => {
        let { queryParameter } = this.state
        this.setState({ apiStatus: apiStatusConstants.LOADING })
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken === undefined) {
            return null
        }

        const apiUrl = `https://apis.ccbp.in/videos/all?search=${queryParameter}`
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        if (data.videos.length>0) {
            
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
            this.setState({ apiStatus: apiStatusConstants.FAILURE,videosList:[] })
        }
    }
    updateQueryParameter=(userGivenValue)=>{
        this.setState({queryParameter:userGivenValue},this.getVideosList)
    }
    searchResultsNotFoundView=()=>{
        return <div className="noSearchResultsImgContainer">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" className="noSearchResultsImg" alt="noSearchResultsImg"></img>
        </div>
    }
    getHomeVideos = () => {
        let { videosList,apiStatus } = this.state
        return (
            <>
                <NxtSearch updateQueryParameter={this.updateQueryParameter}/>
                <div className="NxtHomeVideoCardsWrapping">
                {apiStatus===apiStatusConstants.LOADING?<div className="NxtLoaderContainer"><ColorRing visible={true} height="80" width="80" ariaLabel="color-ring-loading" wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                /></div>:null}
                    {apiStatus!==apiStatusConstants.FAILURE?videosList.map((eachVideo) => <NxtHomeVideoCard key={eachVideo.id} eachVideo={eachVideo} />):this.searchResultsNotFoundView()}
                </div>
            </>
        )
    }
    
    render() {
        return this.getHomeVideos()
            
    }
}
export default NxtHomeVideos
