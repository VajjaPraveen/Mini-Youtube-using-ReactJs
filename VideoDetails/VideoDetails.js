import { Component } from "react";
import Cookies from "js-cookie";
import { ColorRing } from "react-loader-spinner";
import NxtVideoDetailsCard from "../NxtVideoDetailsCard";
import NxtHeader from "../NxtHeader";
import NxtSideBar from "../NxtSideBar";
const apiStatusConstants = {
  INITIAL: 'INITIAL',
  SUCCESS: 'SUCCESS',
  LOADING: 'LOADING',
  FAILURE: 'FAILURE'
}
class NxtVideoDetails extends Component {
  state = { videoData: [], apiStatus: apiStatusConstants.LOADING }
  componentDidMount() {
    this.getVideoDetails()
  }
  getVideoDetails = async () => {
    this.setState({ LOADING: apiStatusConstants.LOADING })
    let { id } = this.props.match
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
      return null
    }
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      this.setState({ apiStatus: apiStatusConstants.SUCCESS, videoData: data.video_details })
    }
    else {
      this.setState({ apiStatus: apiStatusConstants.FAILURE })
    }
  }
  VideoSuccessView = () => {
    let { videoData } = this.state
    
    return <>
      <NxtHeader />
      <div className="NxtGamingWholeContainer">
        <NxtSideBar />
        <NxtVideoDetailsCard videoData={videoData} />
      </div>
    </>
  }
  videoLoadingView = () => {
    return <div className="NxtLoaderContainer"><ColorRing visible={true} height="80" width="80" ariaLabel="color-ring-loading" wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    /></div>
  }
  VideoFailureView = () => {
    return <div className="noSearchResultsImgContainer">
      <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" className="noSearchResultsImg" alt="noSearchResultsImg"></img>
    </div>
  }


  render() {
    let { apiStatus } = this.state
    switch (apiStatus) {
      case apiStatusConstants.SUCCESS:
        return this.VideoSuccessView()
      case apiStatusConstants.LOADING:
        return this.videoLoadingView()
      case apiStatusConstants.FAILURE:
        return this.VideoFailureView()

      default:
        break;
    }
  }

}
export default NxtVideoDetails
