import { Component } from "react";
import ReactPlayer from "react-player";
import NxtContext from "../NxtContext";

class NxtVideoDetailsCard extends Component {
    state = { saveStatus: false, likeStatus: false, unLikeStatus: false }
    render() {
        let { saveStatus, likeStatus, unLikeStatus } = this.state
        let { videoData } = this.props
        let { title, thumbnail_url, channel, view_count, published_at, description, video_url, isSaved } = videoData
        console.log(isSaved)
        let { name, profile_image_url, subscriber_count } = channel
        return <NxtContext.Consumer>
            {value => {
                let { addVideoToCart, videosCart } = value
                const changeCart = () => {
                    addVideoToCart({ ...videoData, isSaved: true })
                    this.setState((prevState) => ({ saveStatus: !prevState.saveStatus }))



                }
                const LikeMe = () => {
                    if (unLikeStatus) {
                        this.setState({ unLikeStatus: false })
                    }
                    this.setState((prevState) => ({ likeStatus: !prevState.likeStatus }))
                }
                const disLikeMe = () => {
                    if (likeStatus) {
                        this.setState({ likeStatus: false })
                    }
                    this.setState((prevState) => ({ unLikeStatus: !prevState.unLikeStatus }))
                }


                return (<div className="videoCardWholeContainer">
                    <ReactPlayer url={video_url} controls playing />
                    <div className="NxtVideoDetailsContainer">
                        <img src={profile_image_url} alt="profileUrl" className="VideoProfileImage"></img>
                        <div className="">
                            <h1>{title}</h1>
                            <h1>{name}</h1>
                            <div className="NxtLikesSection">
                                <div className="NxtViewCount">
                                    <p>{view_count} Views</p>
                                    <p>{published_at}</p>
                                </div>

                                <div className="NxtLikesContainer">
                                    {likeStatus ?
                                        <div className="NxtLikesContainerMini">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" onClick={LikeMe} viewBox="0 0 24 24" fill="none" stroke="#d11515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up"><path d="M7 10v12" />
                                                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                                            </svg>
                                            Like
                                        </div>
                                        : <div className="NxtLikesContainerMini">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={LikeMe} className="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434" />
                                            </svg>
                                            Like
                                        </div>}
                                    {!unLikeStatus ? <div className="NxtLikesContainerMini">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" onClick={disLikeMe} fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                                        </svg>
                                        Dislike
                                    </div>
                                        :

                                        <div className="NxtLikesContainerMini">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" onClick={disLikeMe} height="16" viewBox="0 0 24 24" fill="none" stroke="#ca4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-down"><path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                                            </svg>
                                            Dislike
                                        </div>

                                    }
                                    <div className="NxtLikesContainerMini" onClick={changeCart}>
                                        {isSaved ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e71313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-audio"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 8v3"/><path d="M12 6v7"/><path d="M16 8v3"/></svg>
                                            : <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512">
                                                <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" /></svg>
                                        }
                                        {isSaved ? <p className="SaveVideos">Save video</p> : <p>Save video</p>}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>)
            }}

        </NxtContext.Consumer>

    }
}
export default NxtVideoDetailsCard
