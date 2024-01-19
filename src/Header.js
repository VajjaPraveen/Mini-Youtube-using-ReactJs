import Cookies from "js-cookie"
import { Component } from "react"
import NxtContext from "../NxtContext"

class NxtHeader extends Component {
    render() {
        return <NxtContext.Consumer>
            {value => {
                let { isDarkTheme, changeTheme } = value
                const logOut = () => {
                    Cookies.remove('jwt_token')
                    this.props.Navigate('/login')
                }
                const changeMe = () => {
                    changeTheme()
                }

                return (

                    <div className="nxtHeaderContainer" >
                        <div>
                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="nxt-watch-logo-light" className="nxtWatchLogo"></img>
                        </div>
                        <div className="nxtHeaderProfileContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" onClick={changeMe} className="bi bi-moon-fill" viewBox="0 0 16 16" >
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278" />
                            </svg>
                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="profile" className="nxtProfile"></img>
                            <button onClick={logOut}>Logout</button>
                        </div>
                    </div>
                )

            }}
        </NxtContext.Consumer>

    }
}
export default NxtHeader
