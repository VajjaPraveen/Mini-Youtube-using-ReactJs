import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
let userDetails = {
    userName: "",
    userPassword: ""
}
class NxtLoginForm extends Component {
    state = { userNameErrorMsg: false, userPasswordErrorMsg: false,
         userNameErrorPara: "", userPasswordErrorPara: "",
        changeCheckStatus:false,submitError:false }
    getUsername = (event) => {
        if (event.target.value !== "") {

            this.setState({ userNameErrorMsg: false, userNameErrorPara: "" })
            userDetails.userName = event.target.value
        }
        else {
            this.setState({ userNameErrorMsg: true, userNameErrorPara: "Enter Name" })
        }
    }
    getUserPassword = (event) => {
        if (event.target.value !== "") {
            this.setState({ userPasswordErrorMsg: false, userPasswordErrorPara: "" })
            userDetails.userPassword = event.target.value
        }
        else {
            this.setState({ userPasswordErrorMsg: true, userPasswordErrorPara: "Enter Password" })
        }

    }
    checkStatus=(event)=>{
        this.setState((prevState)=>({changeCheckStatus:!prevState.changeCheckStatus}))
    }

    onSuccessfulSubmit=(jwtToken)=>{
            
            Cookies.set('jwt_token',jwtToken);
            this.props.Navigate('/')
           

    }
    onFailureSubmit=(errorMsg)=>{
            this.setState({submitError:true})
    }
    logIntoNxtWatch = async (event) => {
        event.preventDefault()
        let {userName,userPassword}=userDetails
        if (userName===""){
            this.setState({ userNameErrorMsg: true, userNameErrorPara: "Enter Name" }) 
        }
        if (userPassword===""){
            this.setState({ userPasswordErrorMsg: true, userPasswordErrorPara: "Enter Password" }) 
        }
        else
        {
            const userDetails = {username:userName,password:userPassword}
            let apiUrl="https://apis.ccbp.in/login"
            const options={
                method:'POST',
                body:JSON.stringify(userDetails)
                
            }
            const response=await fetch(apiUrl,options)
            const data=await response.json()
            if (response.ok)
            {
                this.setState({submitError:false})
                this.onSuccessfulSubmit(data.jwt_token)
            }
            else{
                this.onFailureSubmit(data.error_msg)
            }
        }
        }
    render() {
        let { userNameErrorMsg, userNameErrorPara, userPasswordErrorMsg, userPasswordErrorPara,changeCheckStatus,submitError } = this.state
        const jwtToken=Cookies.get('jwt_token')
        if (jwtToken!==undefined){
            return <Navigate to='/'/>
        }
        return (<div className="NxtLoginFormWholeContainer">
            <div className="NxtLoginFormContainer">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="nxtLogo"></img>
                <form onSubmit={this.logIntoNxtWatch}>
                    <div className="NxtLoginElement">
                        <label>Username</label>
                        <br />
                        <input type="text" onChange={this.getUsername}></input>
                        {userNameErrorMsg && <p className="userNameErrorPara">{userNameErrorPara}</p>}
                    </div>


                    <div className="NxtLoginElement">
                        <label>Password</label>
                        <br />
                        {changeCheckStatus?<input type="text" onChange={this.getUserPassword}></input>:
                        <input type="password" onChange={this.getUserPassword}></input>}
                        {userPasswordErrorMsg && <p className="userNameErrorPara">{userPasswordErrorPara}</p>}
                    </div>
                    <div className="NxtLoginElement">
                        <input type="checkbox" id="checkId" onClick={this.checkStatus}></input>
                        <label htmlFor="checkId">Show Password</label>
                    </div>
                    <div className="nxtLoginButtonContainer">
                        <button className="nxtLoginButton">Login</button>
                    </div>
                    {submitError&&<p className="errorMessage">username and password are not matched</p>}
                </form>
            </div>
        </div>)
    }
}
export default NxtLoginForm
