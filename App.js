
// #############################################Users list updation and deletion
// import UserProfile from './components/UserProfiles/index'
// import './App.css'
// import { Component } from 'react'
// const userinitialList = [
//   {
//     uniqueNo: 1,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//     name: 'Esther Howard',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 2,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
//     name: 'Floyd Miles',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 3,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
//     name: 'Jacob Jones',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 4,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
//     name: 'Devon Lane',
//     role: 'Software Developer'
//   }
// ]



// class App extends Component{
//   state={userInput:"",
//         userDetailsList:userinitialList}
//    takeInput=(event)=>{
//     this.setState({userInput:event.target.value})
//   }
//   deleteUser=(uniqueNo)=>{
//     const {userDetailsList}=this.state
//     const deleted=userDetailsList.filter((each)=>

//       each.uniqueNo!==uniqueNo)
//     this.setState({userDetailsList:deleted})
//   }
//   render(){
//     let {userInput,userDetailsList}=this.state
//     const filtered=userDetailsList.filter((each)=>

//       each.name.includes(userInput)===true)

// return(
//   <div className="list-container">
//     <h1 className="title">Users List</h1>
//     <input type='search' onChange={this.takeInput}></input>
//     <ul className='Unordered'>
//       {filtered.map((eachItem) => (
//         <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} deleteme={this.deleteUser}/>
//       ))}
//     </ul>
//   </div>)
//   }
// }
// export default App

// import UserProfile from './components/UserProfiles/index'
// const UserDetails=[{
//   uniqueno:1,
//   imageUrl:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//   name: 'Esther Howard',
//   role: 'Software Developer'
// },{
//   uniqueno:2,
//   imageUrl:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//   name: 'Esther Howard',
//   role: 'Software Developer'
// },{
//   uniqueno:3,
//   imageUrl:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//   name: 'Esther Howard',
//   role: 'Software Developer'
// },{
//   uniqueno:4,
//   imageUrl:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//   name: 'Virat Kohli',
//   role: 'Cricketer'
// }]

// const App=()=>(<div><h1>Users List</h1>
//   <ul>
//   {
//     UserDetails.map((eachitem) =>(<UserProfile userdetails={eachitem} key={eachitem.uniqueno}/>
//   ))

// }


//   </ul>

// </div>)


// %%%%%%%%%%%%%counter app
// import Counter from "./components/Counter"
// const App=()=>{
//   return (<Counter/>)
// }
// export default App
// #########################// %%%%%%%%%%%%%counter app

// speedometer app
// import './App.css'
// import Speedometer from './components/speedometer'

// const App=()=>{
//   return (

//   <Speedometer/>
//   )
// }
// export default App

// %%%%%%%%%%%%%%%%%%%%%%%%%%Speedometer


// $$$$$$$$$$$$$$$$$$$$$$$$Fruits Counter app
// import Fruitcounter from "./components/fruitsCounter";
// const App=()=>{
//   return (
//   <div className="bgContainer">
//     <Fruitcounter/>
//   </div>
//   )
// }
// export default App
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%Fruits app ending

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// import './App.css'
// import Welcome from "./components/subscribed";
// const App=()=>{
//   return (<div className="bgContainer">
//     <Welcome/>
//   </div>)
// }
// export default App

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// import './App.css'
// import EvenOddApp from './components/evenOddApp';
// const App=()=>{
//   return (
//     <EvenOddApp/>
//   )
// }
// export default App



// import './App.css'
// import { Component } from 'react'
// import Destinations from './components/Destinations'
// const DestinationsList=[{
//   id:1,
//   name:"nemo",
//   imageurl:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/nemo-c1-img.png",

// },{
//   id:2,
//   name:"cheema",
//   imageurl:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/nemo-c2-img.png",

// },{
//   id:3,
//   name:"reema",
//   imageurl:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/nemo-c3-img.png",

// },{
//   id:4,
//   name:"laama",
//   imageurl:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/nemo-c1-img.png",

// },{
//   id:5,
//   name:"raama",
//   imageurl:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/nemo-c1-img.png",

// },{
//   id:6,
//   name:"ram",
//   imageurl:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/nemo-c1-img.png",

// },{
//   id:7,
//   name:"naam",
//   imageurl:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/nemo-c1-img.png",

// },]

// class App extends Component{
//   state={inpdest:"",newDestinationsList:DestinationsList}
//   search=(event)=>{
//     this.setState({inpdest:event.target.value})

//   }
//   deletemepls=(id)=>{
//     let {newDestinationsList}=this.state
//    const modified= newDestinationsList.filter((eachone)=>eachone.id!==id)
//     this.setState({newDestinationsList:modified})
//   }

//   render(){
//     let {inpdest,newDestinationsList}=this.state
//     const filtered=newDestinationsList.filter((each)=>each.name.includes(inpdest))
//     console.log(filtered)
//     return (<div className="wholeCon">
//       <h1>Destinations search</h1>
//       <div className='ipContainer'>
//       <input type='search' placeholder='search' className='Inp' onChange={this.search}></input>
//       <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search" className='searchIcon'></img>
//       </div>
//       <ul className='unordered'>
//         {filtered.map((each)=>{
//             return (<Destinations eachdest={each} key={each.id} deletemepls={this.deletemepls}/>)
//          })}
//       </ul>

//     </div>)
//   }
// }

//  export default App


// &&&&&&&&&&&&&&&&&&atmbalance code

// import './App.css'
// import { Component } from "react";
// import Withdraw from './components/atmWithdrawal';
// const denominationList = [
//   { id: 1, value: 50 },
//   { id: 2, value: 100 },
//   { id: 3, value: 200 },
//   { id: 4, value: 500 }]

// class App extends Component {
//   state={current:2000}
//   updateMoney=(id,value)=>{

//     this.setState((prevstate)=>({current:prevstate.current-value}))

//   }
//   render(){
//     let {current}=this.state
//   return (
//     <div className='atmCon'>
//       <div className='atmlog'>

//         <div className="atmprofilecon">
//           <div className='atmProfilePic'>
//             <h1>V</h1>

//           </div>
//           <h1>Praveen</h1>
//         </div>
//         <div className="balancecon">
//           <h1>Your balance</h1>
//           <div>
//             <h1>{current}</h1>
//             <p>in Rupees</p>
//           </div>
//         </div>
//         <div>
//           <h1>Withdraw</h1>
//           <h1>Choose sum in rupees</h1>
//         </div>
//         <div className="atmBtnCon">
//         {denominationList.map((each) => <Withdraw id={each.id} value={each.value} updateMoney={this.updateMoney} />
//         )
//         }
//         </div>
//       </div>


//     </div>

//   )
//       }
// }
// export default App

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%atm balance code end


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%google searches


// import './App.css'
// import { Component } from "react";
// import Searchme from './components/googleSearches';
// const searcList = [{ id: 1, value: "Ethereum price" }, 
//  { id: 2, value: "Rubium price" }, 
//  { id: 3, value: "Latest trends in ML" }, 
//  { id: 4, value: "Latest trends in AI" },
//  { id: 5, value: "Latest trends in Python" },
//  { id: 6, value: "Latest trends in Js" }]


// class App extends Component {
//   state={inputuser:""}
//   filtered=(event)=>{
//     this.setState({inputuser:event.target.value})

//   }
//   addme=(value)=>{
//     this.setState({inputuser:value})

//   }
//   render() {
//     let {inputuser}=this.state
//     const filtereddataafter=searcList.filter((eachname)=>eachname.value.includes(inputuser))
//     return (
//       <div className="googleCon">
//             <img src="https://s3.amazonaws.com/images.seroundtable.com/google-rainbow-texture-1491566442.jpg" alt="google" className="googleImg"></img>

//             <div className="googleCard">
//                 <input type="search" placeholder="search" className="inpgoogle" onChange={this.filtered} value={inputuser}></input>
//                 <ul className="searchResults">
//                    {filtereddataafter.map((each)=>{return (<Searchme eachvalue={each} addme={this.addme}/>)})} 
//                 </ul>
//             </div>
//         </div>

//    )
//   }
// }
// export default App

// $$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%google seacrh ending



// ########################################google history starting
// import './App.css'
// import { Component } from "react";
// import History from './components/googleHistory';
// const historyList=[
// {id:1,imageurl:"https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-1024.png",title:"Instagram",link:"https://www.instagram.com",time:'10:00pm'},
// {id:2,imageurl:"https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-1024.png",title:"Facebook",link:"https://www.instagram.com",time:'10:20pm'},
// {id:3,imageurl:"https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-1024.png",title:"Twitter",link:"https://www.instagram.com",time:'10:00pm'},
// {id:4,imageurl:"https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-1024.png",title:"Snap",link:"https://www.instagram.com",time:'10:00pm'},
// {id:5,imageurl:"https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-1024.png",title:"whatsapp",link:"https://www.instagram.com",time:'10:00pm'},
// {id:6,imageurl:"https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-1024.png",title:"threads",link:"https://www.instagram.com",time:'10:00pm'},
// {id:7,imageurl:"https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-1024.png",title:"fb",link:"https://www.instagram.com",time:'10:00pm'},]
// class App extends Component {
//   state={user:""}
//   inputtake=(event)=>{
//     this.setState({user:event.target.value})
//     console.log(this.state)
//   }
//   render() {
//     let {user}=this.state
//     const filtered=historyList.filter((eachone)=>eachone.title.includes(user))
//     console.log(filtered)
//     return (<div className='historyWholeCon'>
//       <div className='navbar'>
//         <h1 className='googlehistory'>History</h1>
//         <div className='inputGoogle'>
//           <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path d="m21.75 20.063-5.816-5.818a7.523 7.523 0 0 0 1.44-4.433c0-4.17-3.393-7.562-7.562-7.562-4.17 0-7.562 3.392-7.562 7.562s3.392 7.562 7.562 7.562a7.523 7.523 0 0 0 4.433-1.44l5.818 5.816 1.687-1.688ZM9.812 14.986a5.174 5.174 0 1 1-.002-10.35 5.174 5.174 0 0 1 0 10.349Z"></path>
//           </svg>
//           <input type='search' placeholder='Search history' className='inpgoo' onChange={this.inputtake}></input>
//         </div>

//       </div>
//       <ul className='unorderGoogle'>

//         {filtered.map((each)=><History eachHistory={each}/>)}
//       </ul>
//     </div>)
//   }
// }
// export default App

// #@$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$google history ending

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%MiniCounter Starting
// import MiniCounter from "./components/miniCounter";
// const App=()=>{
//   return(<MiniCounter/>)
// }
// export default App
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@mini counter ending


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Feedback app
// import Feedback from "./components/feedback";
// import { Component } from "react";
// const emojisList={emojis:[
//   {id:1,name:"super",url:"https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518_1280.png"},
//   {id:2,name:"sad",url:"https://cdn.pixabay.com/photo/2016/08/29/11/55/emoticon-1628080_1280.png"},
//   {id:3,name:"very good",url:"https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518_1280.png"}]}
//   let{emojis}=emojisList
//   class App extends Component{
//     state={newList:emojis,thankyoupara:"",beforeThank:"How satisfied are you with our customer support performance?"}
//     feedbacknew=()=>{
//       let updated=[{id:1,name:"Thank you",url:"https://cdn.pixabay.com/photo/2018/02/10/20/34/emoji-3144478_1280.png"}]
//       let updated2="Thank youy for your valuable feedback.We are always giving our best to give better experience"
//       let updated3=""
//       this.setState({newList:updated,thankyoupara:updated2,beforeThank:updated3})
//     }

//   render(){
//     let{newList,thankyoupara,beforeThank}=this.state

//   return(<div className="FeedBackBg">
//     <div className="FeedbackInsideCard">
//       <h1 className="FeedbackHeading">{beforeThank}</h1>
//       <div className="emojisCon">
//         {newList.map((each)=>(<div className="emojiMiniCon" onClick={this.feedbacknew}>
//             <img src={each.url} alt='emoji' className="emojisImg" ></img>
//             <p className="namesofemojis">{each.name}</p>
//             <Feedback thankyoupara={thankyoupara}/>
//         </div>))}



//       </div>

//     </div>


//   </div>)
// }
// }
// export default App

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&feedback app ending



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%tabsearcher
// import {Component} from 'react'

// import TabItem from './components/TabItem'
// import ProjectItem from './components/ProjectItem'


// import './App.css'

// const tabsList = [
//   {tabId: 'STATIC', displayText: 'Static'},
//   {tabId: 'RESPONSIVE', displayText: 'Responsive'},
//   {tabId: 'DYNAMIC', displayText: 'Dynamic'},
// ]

// const projectsList = [
//   {
//     projectId: 0,
//     category: 'STATIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
//     title: 'Music Page',
//     description:
//       'The music page enables the users to browse through the images of all-time favorite music albums.',
//   },
//   {
//     projectId: 1,
//     category: 'STATIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
//     title: 'Tourism Website',
//     description:
//       'A tourism website enables the user to browse through the images of popular destinations.',
//   },
//   {
//     projectId: 2,
//     category: 'STATIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
//     title: 'Advanced Technologies',
//     description:
//       'A website that gives you a basic understanding of Advanced Technologies.',
//   },
//      {
//        projectId: 3,
//        category: 'STATIC',
//        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
//        title: 'Happy Meals',
//        description: 'Discover the best foods in over 1,000 restaurants.',
//      },
//   {
//     projectId: 4,
//     category: 'RESPONSIVE',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
//     title: 'VR Website',
//     description:
//       'VR Website enables users to explore AR and VR Products and Industry happenings.',
//   },
//   {
//     projectId: 5,
//     category: 'RESPONSIVE',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
//     title: 'Food Munch',
//     description: 'Food Much Website is a user-centric food tech website.',
//   },
//   {
//     projectId: 6,
//     category: 'RESPONSIVE',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
//     title: 'Portfolio',
//     description:
//       'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
//   },
//  {
//    projectId: 7,
//    category: 'RESPONSIVE',
//    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
//    title: 'Design',
//    description:
//      'A website to showcase the best features and give more information about the Design tool.',
//  },
//   {
//     projectId: 8,
//     category: 'DYNAMIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
//     title: 'Speed Typing Test',
//     description:
//       'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
//   },
//   {
//     projectId: 9,
//     category: 'DYNAMIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
//     title: 'Random Joke Page',
//     description:
//       'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
//   },
//   {
//     projectId: 10,
//     category: 'DYNAMIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
//     title: 'Sizing An Image',
//     description:
//       'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
//   },
// ]

// class App extends Component {
//   state = {
//     activeTabId: tabsList[0].tabId,
//   }

//   clickTabItem = tabValue => {
//     this.setState({activeTabId: tabValue})
//   }

//   getFilteredProjects = () => {
//     const {activeTabId} = this.state
//     const filteredProjects = projectsList.filter(
//       eachprojectDetails => eachprojectDetails.category === activeTabId,
//     )
//     return filteredProjects
//   }

//   render() {
//     const {activeTabId} = this.state
//     const filteredProjects = this.getFilteredProjects()
//     return (
//       <div className="app-container">

//         <h1 className="title">Projects</h1>
//         <p className="description">
//           Your skills and achievements showcase your strengths and abilities.
//           Speak about any new skills or software you learnt to perform the
//           project responsibilities.
//         </p>

//         <ul className="tabs-container">
//           {tabsList.map(tabDetails => (
//             <TabItem
//               key={tabDetails.tabId}
//               tabDetails={tabDetails}
//               clickTabItem={this.clickTabItem}
//               isActive={activeTabId === tabDetails.tabId}
//             />
//           ))}
//         </ul>

//         <ul className="project-list-container">
//           {filteredProjects.map(projectDetails => (
//             <ProjectItem
//               key={projectDetails.projectId}
//               projectDetails={projectDetails}
//             />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// export default App
// ##############################tab searcher ending


// *****************************************Thumbnails starting

// import { Component } from "react";
// import Gallery from "./components/Gallery";
// import Thumbnail from "./components/Thumbnail";
// const imageList = [
// { id: 1, imageurl: "https://img.freepik.com/free-photo/adults-enjoying-mexican-food_23-2149663877.jpg?w=900&t=st=1698990996~exp=1698991596~hmac=a31bf1203669ebac2174425582568d83488ace759acb9ba9049502f9a5d47f0a", thumbnailurl: "https://img.freepik.com/free-photo/adults-enjoying-mexican-food_23-2149663877.jpg?w=900&t=st=1698990996~exp=1698991596~hmac=a31bf1203669ebac2174425582568d83488ace759acb9ba9049502f9a5d47f0a", imageAltText: "imagealt", thumbNailAltText: "thumbnailalt1" },
// { id: 2, imageurl: "https://img.freepik.com/free-photo/happy-family-looking-through-window-while-moving-into-new-home_637285-11607.jpg?w=900&t=st=1698999360~exp=1698999960~hmac=d15c7042cf7b14e17bd34d3dca65876496e413389b1fd21947f23e8bef5c3e7b", thumbnailurl: "https://img.freepik.com/free-photo/happy-family-looking-through-window-while-moving-into-new-home_637285-11607.jpg?w=900&t=st=1698999360~exp=1698999960~hmac=d15c7042cf7b14e17bd34d3dca65876496e413389b1fd21947f23e8bef5c3e7b", imageAltText: "imagealt", thumbNailAltText: "thumbnailalt2" },
// { id: 3, imageurl: "https://img.freepik.com/free-photo/smiling-pensive-woman-sitting-by-table-cafe_171337-9601.jpg?w=900&t=st=1698999917~exp=1699000517~hmac=0bc595592e189c610dd311a8fae9e3084c72d700f4f5d35cfdfee0b9a171a2cb", thumbnailurl:"https://img.freepik.com/free-photo/smiling-pensive-woman-sitting-by-table-cafe_171337-9601.jpg?w=900&t=st=1698999917~exp=1699000517~hmac=0bc595592e189c610dd311a8fae9e3084c72d700f4f5d35cfdfee0b9a171a2cb", imageAltText: "imagealt", thumbNailAltText: "thumbnailalt3" },
// { id: 4, imageurl: "https://img.freepik.com/free-photo/african-american-businesswoman-wearing-protective-mask-while-communicating-mobile-phone-working-laptop-cafe_637285-5391.jpg?w=900&t=st=1698999990~exp=1699000590~hmac=dc65ebbea1c53e1506de4a44e0b2d66ef9b1960dd2dcbcbe2c8e3880d38a7d68",thumbnailurl:"https://img.freepik.com/free-photo/african-american-businesswoman-wearing-protective-mask-while-communicating-mobile-phone-working-laptop-cafe_637285-5391.jpg?w=900&t=st=1698999990~exp=1699000590~hmac=dc65ebbea1c53e1506de4a44e0b2d66ef9b1960dd2dcbcbe2c8e3880d38a7d68",imageAltText: "imagealt", thumbNailAltText: "thumbnailalt4" },
// { id: 5, imageurl: "https://img.freepik.com/free-photo/adults-enjoying-mexican-food_23-2149663877.jpg?w=900&t=st=1698990996~exp=1698991596~hmac=a31bf1203669ebac2174425582568d83488ace759acb9ba9049502f9a5d47f0a", thumbnailurl: "https://img.freepik.com/free-photo/adults-enjoying-mexican-food_23-2149663877.jpg?w=900&t=st=1698990996~exp=1698991596~hmac=a31bf1203669ebac2174425582568d83488ace759acb9ba9049502f9a5d47f0a", imageAltText: "imagealt", thumbNailAltText: "thumbnailalt5" },
// { id: 6, imageurl: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?t=st=1698999917~exp=1699000517~hmac=f462bfc9ba0729eddac0a6b52235591fc7e017a5e5dd966b151ddbaf1fbe2a18", thumbnailurl:"https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?t=st=1698999917~exp=1699000517~hmac=f462bfc9ba0729eddac0a6b52235591fc7e017a5e5dd966b151ddbaf1fbe2a18",imageAltText: "imagealt", thumbNailAltText: "thumbnailalt6" },]
// class App extends Component {
//     state={thumbnailid:imageList[0].id}
//     displayPic=(id)=>{
//         this.setState({thumbnailid:id})

//     }
//     filterfunction=()=>{
//         let {thumbnailid}=this.state
//         const modifiedData=imageList.filter((each)=>each.id===thumbnailid)
//         return modifiedData
//     }
//     render(){
//         let filtereddata=this.filterfunction()
//         return (
//             <div className="wholeConGallery">
//         {filtereddata.map((each)=> <Gallery eachImage={each} key={each.id}/>)}
//         <h1>Nature Photography</h1>
//         <h2>Nature Photography by Rahul</h2>
//         <div className="thumbimgsCon">
//         {imageList.map((each)=> <Thumbnail eachThumbImage={each} key={each.thumbNailAltText} displayPic={this.displayPic}/>)}
//         </div>
//         </div>
//         )
//     }


// }
// export default App


// *****************************************Thumbnails ending


// *****************************************Capitals starting
// import { Component } from "react";
// import Capital from "./components/Capitals";

// const capitalList=[{id:1,countryname:"India",capitalName:"New Delhi"},{id:2,countryname:"UK",capitalName:"London"},
// {id:3,countryname:"France",capitalName:"Paris"},
// {id:4,countryname:"Finland",capitalName:"Helsinki"}]
// class App extends Component{
//     state={capital:"New Delhi"}
//     changeInput=(event)=>{
//         this.setState({capital:event.target.value})

//     }
//     filterme=()=>{
//         let {capital}=this.state
//         console.log(capital)
//         const modified=capitalList.filter((each)=>each.capitalName===capital)
//         return modified
//     }
//     render(){
//         let filteredData=this.filterme()
//         return (<div className="capitalsbg">
//                 <div className="capitalsInside">
//                     <h1>Countries and capitals</h1>
//                 <select  onChange={this.changeInput}>
//                     <option value="New Delhi">New Delhi</option>
//                     <option value="London">London</option>
//                     <option value="Paris">Paris</option>
//                     <option value="Helsinki">Helsinki</option>
//                 </select>
//                 <label>is capital of which country"</label>
//                 {filteredData.map((each)=><Capital eachval={each} key={each.id}/>)}
//                 </div>





//         </div>)
//     }
// }
// export default App
// *****************************************Capitals ending


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Coins starting
// import { Component } from "react";
// import Tosscoin from "./components/TossCoin";
// const tossList = [{ id: 0, imageUrl: "https://assets.ccbp.in/frontend/react-js/heads-img.png" }, { id: 1, imageUrl: "https://assets.ccbp.in/frontend/react-js/tails-img.png" }]
// class App extends Component {
//     state = { imageId: tossList[0].id, headcount: 0, tailcount: 0, totalcount: 0 }
//     cointossed = () => {

//         let randomVal = Math.floor(Math.random() * 2)
//         !randomVal ? this.setState((prevstate) => ({ imageId: randomVal, headcount: prevstate.headcount + 1, totalcount: prevstate.totalcount + 1 })) : this.setState((prevstate) => ({ imageId: randomVal, tailcount: prevstate.tailcount + 1, totalcount: prevstate.totalcount + 1 }))
//     }
//     changeImage=()=>{
//         let {imageId}=this.state
//         const modified=tossList.filter((each)=>each.id===imageId)
//         return modified
//     }
//     render() {
//         let filtereddata=this.changeImage()
//         let { headcount, tailcount, totalcount } = this.state
//         return (<div className="TossCoinBg">
//             <div className="TossCoinInside">
//                 <h1>Coin Toss game</h1>
//                 <h1>Heads or Tails</h1>
//                 {filtereddata.map((each) => <Tosscoin eachlist={each} key={each.id} />)}
//                 <div className="coinButton">
//                     <button onClick={this.cointossed}>Toss Coin</button>
//                 </div>

//                 <div className="countCon">
//                     <p>Total:{totalcount}</p>
//                     <p>Heads:{headcount}</p>
//                     <p>Tails:{tailcount}</p>
//                 </div>

//             </div>

//         </div>)
//     }
// }
// export default App
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Coins ending


// ######################################Reviews app
// import { Component } from "react";

// import Reviews from "./Components/Reviews";
// const ReviewsList=[{id:0,imageurl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"elyse perry",company:"Audi",review:"It was a pretty good good company for freshers where they can get good training"},
// {id:1,imageurl:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/370400/370444.jpg",name:"Praveen",company:"Audi",review:"It was a pretty good good company for freshers where they can get good training"},
// {id:2,imageurl:"https://media.istockphoto.com/id/670418084/photo/studio-shot-of-young-persian-man-thinking-while-looking-up.jpg?s=1024x1024&w=is&k=20&c=kYMXcAgaB9SybSERfu5p8wI4fOkpv68ScukXHvvZWoE=",name:"Pavan",company:"Benz",review:"It was a pretty good good company for freshers where they can get good training"},
// {id:3,imageurl:"https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=1024x1024&w=is&k=20&c=8mgK2Kq73o8DIjazvLmEGkhx2p_7P5r3mvpbIM6q5cA=",name:"Kohli",company:"Audi",review:"It was a pretty good good company for freshers where they can get good training"},
// {id:4,imageurl:"https://media.istockphoto.com/id/963443936/photo/man-is-staying-on-the-white-background-in-the-studio.jpg?s=1024x1024&w=is&k=20&c=kgjuN4B2YV48kQyPlWJDyaq9kVSDb6ZJrcWRQqRtCVw=",name:"Rohit",company:"Audi",review:"Very good "},
// ]
// class App extends Component{
//     state={personId:0}
//     changemeleft=(id)=>{
//         if(id!==0)
//         {
//             this.setState((prevstate)=>({personId:prevstate.personId-1}))
//         } 
//     }
//     changemeright=(id)=>{
//         if(id!==4)
//         {
//             this.setState((prevstate)=>({personId:prevstate.personId+1}))
//         }

//     }
//     filtered=()=>{
//         let {personId}=this.state
//         let modified=ReviewsList.filter((each)=>each.id===personId)
//         return modified
//     }
//     render(){
//         let finaldata=this.filtered()
//         return(<div className="reviewsCon"> 
//             <h1>Reviews</h1>
//             <div>
//                  {finaldata.map((each)=><Reviews eachperson={each} goleft={this.changemeleft} goRight={this.changemeright}/>)}
//             </div>




//         </div>)
//     }
// }
// export default App
// ??????????????????????????????Reviews ending



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&Comments starting
// import { Component } from "react";
// import Comment from "./Components/Comments";
// let commentlist = [{ id: getUID(), username: "", usercomment: "", isliked: false }]
// function getUID() {
//     // Get the timestamp and convert 
//     // it into alphanumeric input
//     return Date.now().toString(36);
// }


// class App extends Component {
//     state = { commentsData: commentlist, username: "", usercomment: "",count:0 }
//     giveName = (event) => {
//         this.setState({ username: event.target.value })


//     }
//     giveComment = (event) => {
//         this.setState({ usercomment: event.target.value })

//     }

//     addComment = () => {
//         let { usercomment, username } = this.state
//         const newcomment = { id: getUID(), username: username, usercomment: usercomment, isliked: false }
//         this.setState((prevstate) => ({ commentsData: [...prevstate.commentsData, newcomment] ,count:prevstate.count+1}))

//     }
//     deleteme=(id)=>{
//         let {commentsData}=this.state
//         const filtered=commentsData.filter((each)=>each.id!==id)
//         console.log(filtered)
//         this.setState((prevstate)=>({commentsData:filtered,count:prevstate.count-1}))
//     }
//     render() {
//         let { commentsData,count } = this.state
//         return (<div>

//             <div className="commentsBg">
//                 <h1>Comments</h1>
//                 <div className="commentsinside">

//                     <div className="inputContainerComments">

//                         <p>say something about 4.0 technologies</p>
//                         <input type="text" placeholder="Your name" className="inputCommentname" onChange={this.giveName}></input>
//                         <br />
//                         <textarea placeholder="Your comment" rows={9} cols={20} onChange={this.giveComment}></textarea>
//                         <div>
//                             <button className="addcommentBtn" onClick={this.addComment}>Add comment</button>
//                         </div>
//                     </div>
//                     <div>
//                         <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments" className="commentsIng"></img>
//                     </div>
//                 </div>
//             </div>
//             <hr />
//             <h1>{count} comments</h1>
//             {commentsData.map((each) => <Comment eachcomment={each} deleteme={this.deleteme}/>)}

//         </div>)
//     }
// }
// export default App


// ****************************************comments ending


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&Money manager starting

// import { Component } from "react";
// import Money from "./Components/MoneyManager";
// const InitialhistoryList=[{id:getUID(),title:"",Amount:0,Type:""}]
// function getUID() {
//     // Get the timestamp and convert 
//     // it into alphanumeric input
//     return Date.now().toString(36);
// }
// class App extends Component {
//     state={historyList:InitialhistoryList,title:"",Amount:0,Type:"Income",incomecount:0,expensescount:0,balancecount:0}
//     changeTitle=(event)=>{
//         this.setState({title:event.target.value})
//     }
//     changeAmount=(event)=>{
//         this.setState({Amount:event.target.value})
//     }
//     changeIncomeType=(event)=>{
//         this.setState({Type:event.target.value})
//     }
//     addhistory=(event)=>{
//         event.preventDefault()
//         let {title,Amount,Type}=this.state
//         const newObj={id:getUID(),title:title,Amount:Amount,Type:Type}
//         if(Type==="Income"){
//             this.setState((prevstate)=>({incomecount:parseInt(prevstate.incomecount)+parseInt(Amount)}))

//         }
//         if(Type==="expenses"){
//             this.setState((prevstate)=>({expensescount:parseInt(prevstate.expensescount)+parseInt(Amount)}))

//         }

//         this.setState((prevstate)=>({historyList:[...prevstate.historyList,newObj],balancecount:prevstate.incomecount-prevstate.expensescount}))

//     }
//     render() {
//         let {historyList,incomecount,balancecount,expensescount}=this.state
//         return (<div className="moneyWhole">
//             <div className="accountHolder">
//                 <h1>Hi Richard</h1>
//                 <p>Welcome to the money manager</p>
//             </div>
//             <div className="moneyTypeContainer">
//                 <div className="balanceCon">
//                     <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png " alt='balance' className="moneyType"></img>
//                     <div>
//                         <h1>Your balance</h1>
//                         <h1>{balancecount}</h1>

//                     </div>
//                 </div>
//                 <div className="incomeCon">
//                     <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png " alt='balance' className="moneyType"></img>
//                     <div>
//                         <h1>Your Income</h1>
//                        <h1>Rs.{incomecount}</h1>

//                     </div>
//                 </div>
//                 <div className="expensesCon">
//                     <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png " alt='balance' className="moneyType"></img>
//                     <div>
//                         <h1>Your expenses</h1>
//                         <h1>Rs.{expensescount}</h1>


//                     </div>
//                 </div>
//             </div>

//             <div className="formandhistory">
//             <form className="formcon">
//                 <h1>Add Transaction</h1>
//                 <div className="forminside">
//                     <label htmlFor="title">Title</label> <br></br>
//                     <input placeholder="Title" name="title" onChange={this.changeTitle}></input>
//                 </div>
//                 <div  className="forminside">
//                 <label htmlFor="title">Amount</label> <br></br>
//                 <input placeholder="Amount" name="title" onChange={this.changeAmount}></input>
//                 </div>
//                 <div className="forminside">
//                 <label htmlFor="title">Type</label> <br></br>
//                 <select defaultValue="Income" onChange={this.changeIncomeType}>
//                     <option value="Income" >Income</option>
//                     <option value="expenses">expenses</option>
//                 </select>
//                 <div>
//                 <button onClick={this.addhistory}>Add</button>
//                 </div>
//                 </div>
//             </form>
//             <div className="historyContainer"> 
//                 <h1>History</h1>
//                 <div className="tableCon">
//                     <ul className="tableHead">
//                         <li>Title</li>
//                         <li>Amount</li>
//                         <li>Type</li>

//                     </ul>
//                     {historyList.map((each)=> <Money eachhistory={each} key={each.id}/>)}


//                 </div>

//             </div>
//             </div>

//         </div>)
//     }
// }
// export default App
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&Money manager ending

// import { Component } from "react";
// import EmojiGame from "./Components/EmojiGame";
// import Navbar from "./Components/Navbar";
// import WinorLooseComponent from "./Components/WinorLosecard";
// const initialemojisList = [{ id: 0, emojiname: "excited", emojiurl: "https://media.istockphoto.com/id/1407693781/photo/back-to-school-emoji-concept-with-student-smiling-in-excitement.jpg?s=1024x1024&w=is&k=20&c=WZ9opAp7h4zbdmGpIKYBWidrH_5JNBZT8SSlburMwC0=", imageClicked: false },
// { id: 1, emojiname: "school", emojiurl: "https://media.istockphoto.com/id/1407693934/photo/back-to-school-emoji-concept-with-student-smiling-in-front-of-toy-blocks-written-school.jpg?s=1024x1024&w=is&k=20&c=pM3NPOj_n-lPH3wmVf9kbDqn-c3cvPN10lUu8-d_NXg=", imageClicked: false },
// { id: 2, emojiname: "bag", emojiurl: "https://media.istockphoto.com/id/1407692998/photo/back-to-school-emoji-concept-with-student-smiling-in-excitement.jpg?s=1024x1024&w=is&k=20&c=P4QtOWBPQ3MVVrN5EntD4sTOyrkF9xM-QF4bvN9FPws=", imageClicked: false },
// { id: 3, emojiname: "goright", emojiurl: "https://media.istockphoto.com/id/1407691606/photo/back-to-school-emoji-concept-with-student-smiling-and-pointing-a-direction-in-excitement.jpg?s=1024x1024&w=is&k=20&c=fgXrzGdIjtJqcILUuwaOru6WL7YXjwO5hASU_u-Nu90=", imageClicked: false },
// { id: 4, emojiname: "Haha", emojiurl: "https://media.istockphoto.com/id/1335559065/vector/cute-smiling-emoticon-wearing-eyeglasses-emoji-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=BIQUvqWQegbRrhzlCMzaKl95Y_72ZUV22Ah_xFIlk5g=", imageClicked: false },
// { id: 5, emojiname: "thankyou", emojiurl: "https://media.istockphoto.com/id/1335558278/vector/cute-smiling-emoticon-wearing-eyeglasses-emoji-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=vnpRta8F2zp4VIGD-TjEa8Jc4cdp2gAm5NHoq136fgE=", imageClicked: false },
// { id: 6, emojiname: "moustache", emojiurl: "https://media.istockphoto.com/id/1498068046/vector/mustache-emoji-vector-icon-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=-NiQhVAO3Y2-gE1WKbhw60m3PBH1GfgO86VV6FZzsIQ=", imageClicked: false },
// { id: 7, emojiname: "attitude", emojiurl: "https://media.istockphoto.com/id/1346395122/photo/cool-smiley-face.jpg?s=1024x1024&w=is&k=20&c=0KNDc-Xk10JfBmq-MKUrsKH-tD3YnZBDrHNeBb1TLc4=", imageClicked: false },
// { id: 8, emojiname: "angry", emojiurl: "https://media.istockphoto.com/id/1346521176/photo/anger-smiley-face.jpg?s=1024x1024&w=is&k=20&c=_wiYl7sB8njU2TolHXB3QQekwYD2yx6RhIMi6vvofS8=", imageClicked: false },
// { id: 9, emojiname: "surprise", emojiurl: "https://media.istockphoto.com/id/1346521175/photo/awe-smiley-face.jpg?s=1024x1024&w=is&k=20&c=sxUw1L8CwxFF6kHK6fcCZdiKD5-3rWbiICvMBb2lOzI=", imageClicked: false },
// { id: 10, emojiname: "astonish", emojiurl: "https://media.istockphoto.com/id/1342796312/photo/wow-smiley-face.jpg?s=1024x1024&w=is&k=20&c=FHym_z6YnooUtvTJIWo5tISaW3si6UqjQ4oWRg7bVYI=", imageClicked: false },
// { id: 11, emojiname: "lazy", emojiurl: "https://media.istockphoto.com/id/1342796323/photo/yawning-smiley-face.jpg?s=1024x1024&w=is&k=20&c=nsWXhGY3gWQj6MFRsJkrVH1OVWjJur50KQ0zHSHZPgQ=", imageClicked: false },]


// function shuffle(array) {
//     let currentIndex = array.length, randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex > 0) {

//         // Pick a remaining element.
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         // And swap it with the current element.
//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]];
//     }

//     return array;
// }
// function Visited(array, id, scorevalold) {
//     let newarray = array.map((each) => {

//         if (each.id === id) {
//             each.imageClicked = true
//             return each
//         }
//         else {
//             return each
//         }
//     })

//     return newarray
// }
// function regainInitialList(array){
//     array.forEach((each)=>each.imageClicked=false)
//     return array

// }


// class App extends Component {
//     state = { emojisList: initialemojisList, scoreCount: 0, totalscore: 0,winorloss:"" }
//     changeimgsorder = (id, imageClicked) => {
//         if (imageClicked === false) {
//             this.setState((prevstate) => ({ scoreCount: prevstate.scoreCount + 1 }))
//         }
//         if (imageClicked===true){
//             this.setState({winorloss:false})
//         }


//         this.setState((prevstateOld) => ({ emojisList: Visited(prevstateOld.emojisList, id) }))

//         this.setState((prevstate) => ({ emojisList: shuffle(prevstate.emojisList) }))



//     }
//     changegamestatus=(scoreCount)=>{
//         this.setState((prevstate)=>({emojisList:regainInitialList(prevstate.emojisList),winorloss:"",totalscore:prevstate.scoreCount,scoreCount:0}))

//     }


//     render() {
//         let { emojisList, scoreCount, totalscore,winorloss } = this.state
//         return (
//             <div className="emojisGameBg">
//                 <Navbar scoreCount={scoreCount} totalscore={totalscore} />

//                {winorloss==="" ?<div className='emojisWholeContainer'>
//                     {emojisList.map((each) => <EmojiGame eachemoji={each} key={each.id} changeimgsorder={this.changeimgsorder} />)}
//                 </div>:<WinorLooseComponent scoreCount={scoreCount} emojislistlength={emojisList.length} changegamestatus={this.changegamestatus}/>}

//             </div>)
//     }
// }
// export default App


// ??????????????????????????????????????Clock app

// import {Component} from 'react'
// import Clock from './Components/Clock'

// import './App.css'

// class App extends Component {
//   state = {
//     showClock: false
//   }
//   onToggleClock = () => {
//     this.setState( prevState => {
//       const { showClock } = prevState
//       return {
//         showClock: !showClock
//       }
//     })
//   }
//   render() {
//     const { showClock } = this.state
//     return (
//       <div className="app-container">
//         <button onClick={ this.onToggleClock } type="button" className="toggle-button">
//           {showClock ?  'Hide Clock' :'Show Clock'}
//         </button>
//         {showClock && <Clock />}
//       </div>
//     )
//   }
// }

// export default App

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&Clock app ending

// ?????????????????????????????????? Digital timer starting
// import { Component } from "react";
// import DigitalTimer from "./Components/Digitaltimer";
// let initialVal=25
// class App extends Component {

//     render() {
//         return (<div className="Digitalbg">

//             <div className="timerMiddle">
//             <h1>Digital timer</h1>

//                 <DigitalTimer initialTime={initialVal}/>
//             </div>

//         </div>)
//     }
// }
// export default App

// ?????????????????????????????????? Digital timer ending
// import { Component } from 'react'
// import FaqItem from './Components/FaqItem'
// const initialFaqsList = [{ id: 0, questionText: "What are the services provided?", answerText: "Business,health", show: false },
// { id: 1, questionText: "What are the areas covered by your company?", answerText: "customer", show: false },
// { id: 2, questionText: "How is your work?", answerText: "Business,health", show: false },
// { id: 3, questionText: "What are the services provided?", answerText: "Business,health", show: false },
// { id: 4, questionText: "What are the services provided?", answerText: "Business,health", show: false }]
// const changeme = (array, id, showvalue) => {
//     array.forEach(element => {
//         if (element.id === id) 
//         {
//             element.show = !showvalue
//         }
//     });
//     return array

// }
// class App extends Component {
//     state = { faqsList: initialFaqsList }
//     changeShow = (id, showvalue) => {
//         this.setState((prevstate) => ({ faqsList: changeme(prevstate.faqsList, id, showvalue) }))
//     }
//     render() {
//         let { faqsList } = this.state
//         return (<div>
//             <ul className='faqUl'>
//                 {faqsList.map((each) => <FaqItem eachFaq={each} key={each.id} changeShow={this.changeShow} />)}
//             </ul>
//         </div>)
//     }

// }
// export default App
// import { Component } from 'react'
// import {BrowserRouter} from 'react-router-dom'
// import PasswordComponent from './Components/PasswordManager';
// let initialpasswordList = [{ id: getUID(), websiteName: '', userName: '', password: '' }]
// function getUID() {
//     // Get the timestamp and convert 
//     // it into alphanumeric input
//     return Date.now().toString(36);
// }
// class App extends Component {
//     state = { passwordList: initialpasswordList, webname: '', webuser: '', webpassword: '',searchInput:'',showpassword:false }
//     websiteName = (event) => {
//         this.setState({ webname: event.target.value })
//     }
//     websiteUser = (event) => {
//         this.setState({ webuser: event.target.value })
//     }
//     websitePassword = (event) => {
//         this.setState({ webpassword: event.target.value })
//     }
//     addIntoPasswordList = (event) => {
//         event.preventDefault()
//         let { webname, webuser, webpassword } = this.state
//         const newList = { id: getUID(), websiteName: webname, userName: webuser, password: webpassword }
//         this.setState((prevstate) => ({ passwordList: [...prevstate.passwordList, newList] }))


//     }
//     searchPassword=(event)=>{
//         this.setState({searchInput:event.target.value})

//     }
//     showMyPassword=()=>{
//         this.setState((prevstate)=>({showpassword:!prevstate.showpassword}))
//     }
//     // deleteUser=(uniqueNo)=>{
//     //     //     const {userDetailsList}=this.state
//     //     //     const deleted=userDetailsList.filter((each)=>

//     //     //       each.uniqueNo!==uniqueNo)
//     //     //     this.setState({userDetailsList:deleted})
//     //     //   }
//     deleteme=(id)=>{
//         const {passwordList}=this.state
//         const deletekarthaHai=passwordList.filter((each)=>each.id!==id)
//         this.setState({passwordList:deletekarthaHai})
//     }
//     render() {
//         let { passwordList,searchInput,showpassword } = this.state
//         let filteredData=passwordList.filter((each)=>each.websiteName.includes(searchInput))

//         return (<div className='passwordBg'>
//             <img src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png' alt='logo' className='passwordLogo'></img>
//             <div className='passwordsInputsContainer'>
//                 <form className='formHolder'>
//                     <h1>Add new password</h1>
//                     <div className='formHolderInputs'>
//                         <input placeholder='Enter website' onChange={this.websiteName}></input>
//                     </div>
//                     <div className='formHolderInputs'>
//                         <input placeholder='Enter Username' onChange={this.websiteUser}></input>
//                     </div>
//                     <div className='formHolderInputs'>
//                         <input placeholder='Enter Password' type='password' onChange={this.websitePassword}></input>
//                     </div>
//                     <div className='formHolderInputs'>
//                         <button onClick={this.addIntoPasswordList}>Add</button>
//                     </div>
//                 </form>
//                 <div>
//                     <img alt='paswordLockImg' src='https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png' className='passwordlockImage'></img>
//                 </div>

//             </div>
//             <div className='passwordListsContainer'>
//                 <div className='passwordSearchCon'>
//                     <h1>Your Passwords</h1>
//                     <input placeholder='search' onChange={this.searchPassword}></input>
//                 </div>
//                 <input type='checkbox' htmlFor='showpass' onChange={this.showMyPassword}></input>
//                 <label id='showpass'>ShowPassword</label>
//                 <ul className='allpasswordsUnorderedList'>
//                     {filteredData.map((each) => <PasswordComponent eachpassword={each} key={each.id} showpassword={showpassword} deleteme={this.deleteme}/>)}
//                 </ul>
//             </div>
//         </div>)
//     }
// }
// export default App

// import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
// import HeaderPage from './Components/Header'
// import Home from "./Components/Home"
// import BlogitemDetails from "./Components/Blogitemdetails"
// import { Component } from "react"
// const About = () => (<div>
//     <h1>About</h1>
//     <img src='https://assets.ccbp.in/frontend/react-js/about-blog-img.png' alt='about'></img>
// </div>)
// const Contact = () =>(<div>
//     <h1>Contact</h1>
//     <img src='https://assets.ccbp.in/frontend/react-js/contact-blog-img.png' alt='home'></img>
// </div>)
// class App extends Component {
//     render(){
//         const Wrapper=(props)=>{
//             const params=useParams()
//             console.log(props)
//             return <BlogitemDetails someval={{...{...props,match:{params}}}}/>

//         }
//         return( <BrowserRouter>
//             <HeaderPage />
//             <Routes>
//                 <Route  path='/' element={<Home />} />
//                 <Route  path='/About' element={<About />} />
//                 <Route  path='/Contact' element={<Contact />} />
//                 <Route path='/blogs/:id' element={<Wrapper/>}/>
//             </Routes>
//         </BrowserRouter>)
//     }
// }
// export default App




// import { Component } from "react"
// import { BrowserRouter } from "react-router-dom"
// import Cryptocurrencylist from "./Components/CryptoCurrencylist"
// class App extends Component{
//     render(){
//         return (<BrowserRouter>
//             <Cryptocurrencylist/>

//         </BrowserRouter>)
//     }
// }
// export default App



// import { Component } from "react"
// import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
// import Teamdetails from "./Components/Teamdetails"
// import Iplhome from "./Components/HomeIpl"
// const NotFound = () => {
//     return (<h1>Not foound........</h1>)
// }
// class App extends Component {
//     render() {

//         const Wrapper = (props) => {
//             const params = useParams()
//             return <Teamdetails paramval={{ ...{ ...props, match: params } }} />
//         }
//         return (
//             <BrowserRouter>

//                 <Routes>
//                     <Route path="/" element={<Iplhome />}/>
//                     <Route  path="/team-matches/:id" element={<Wrapper />} />
//                     <Route element={<NotFound />} />


//                 </Routes>
//             </BrowserRouter>

//         )
//     }
// }
// export default App




// import { Component } from "react"
// class App extends Component{
//     constructor(props){
//         super(props)
//         this.state={date:new Date()}
//     }
//     starrTimmer=()=>{
//         this.timerId=setInterval(this.changeTime,1000)
//     }
//     changeTime=()=>{
//         this.setState({date:new Date()})
//     }
//     render(){
//         const {date}=this.state
//         return (<div>

//             <h1>Time:{date.toLocaleTimeString()}</h1>
//             <button onClick={this.starrTimmer}>Start timer</button>
//         </div>)
//     }
// }
// export default App


// import { Component } from "react"
// class App extends Component{
//     constructor(props){
//         super(props)
//         this.state={time:0}
//     }
//     starrTimmer=()=>{
//         this.timerId=setInterval(this.changeTime,1000)
//     }
//     changeTime=()=>{
//         this.setState((prevstate)=>({time:prevstate.time+1}))
//     }
//     // componentWillUnmount(){
//     //     this.stoptimer()
//     // }
//     stoptimer=()=>{
//         clearInterval(this.timerId)
//     }
//     resettimer=()=>{
//         this.setState({time:0})
//         clearInterval(this.timerId)
//     }
//     render(){
//         const {time}=this.state
//         return (<div>

//             <h1>Time:{time}</h1>
//             <button onClick={this.starrTimmer}>Start timer</button>
//             <button onClick={this.stoptimer}>Stop timer</button>
//             <button onClick={this.resettimer}>Reset timer</button>
//         </div>)
//     }
// }
// export default App




// import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
// import { Component } from 'react'
// import LoginForm from './Components/LoginForm'
// import EcommerceHome from './Components/EcommerceHome'
// import Products from './Components/Products'
// import Cart from './Components/Cart'
// import NotFound from './Components/NotFound'
// import ProtectedRoutes from './Components/ProtectedRoutes'
// import { useNavigate,useLocation } from 'react-router-dom'
// import SpecificProductDetails from './Components/SpecificProductDetails'
// import './App.css'
// import CartContext from './Components/CartContext'

// class App extends Component {
//   state={cartList:[]}
//   addToCart=(productData)=>{
//       this.setState((prevState)=>({cartList:[...prevState.cartList,productData]}))
//   }
//   deleteFromCart=(id)=>{
//       let {cartList}=this.state
//       const filtered=cartList.filter((eachOne)=>eachOne.id!==id)
//       this.setState({cartList:filtered})
//   }
//   clearTheCart=()=>{
//     this.setState({cartList:[]})
//   }
//   increaseQuantity=(count,id)=>{
//       let {cartList}=this.state
//       const modifiedArray=cartList.map((each)=>{
//         if (each.id===id){
//           each.count=each.count+1
//           return each
//         }
//         return each
//       })
//       this.setState({cartList:modifiedArray})
//   }
//   decreaseQuantity=(count,id)=>{
//       let {cartList}=this.state
//       const modifiedArray=cartList.map((each)=>{
//         if (each.id===id && each.count>=1){
//           each.count=each.count-1
//           return each
//         }
//         return each
//       })
//       this.setState({cartList:modifiedArray})
//   }

//   render() {
//     let {cartList}=this.state
//     const LoginWrapper=(props)=>{
//       const navigate=useNavigate()
//       const location = useLocation();
//       return (<LoginForm {...props}
//         navigate={navigate} location={location}/>
//         )
//     }
//     const SpecificProductsWrapper=(props)=>{
//       const params=useParams()
//       return (<SpecificProductDetails {...{...props,match:params}}/>
//         )
//     }
//     return (<BrowserRouter>
//     <CartContext.Provider value={{cartList,addToCart:this.addToCart,deleteFromCart:this.deleteFromCart,clearTheCart:this.clearTheCart,increaseQuantity:this.increaseQuantity,decreaseQuantity:this.decreaseQuantity}}>


//       <Routes>
//         <Route  path="/login" element={<LoginWrapper />} />
//         <Route  element={<ProtectedRoutes/>}>
//             <Route path="/" element={<EcommerceHome />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path='/products/:id' element={<SpecificProductsWrapper/>}/>
//         </Route>

//         <Route path='*'  element={<NotFound />} />
//       </Routes>
//       </CartContext.Provider>
//     </BrowserRouter>)
//   }

// }

// export default App





// import RegistrationForm from './Components/RegistrationForm'
// import RegistrationSuccess from './Components/RegistrationSuccessful'

// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { useNavigate,useLocation } from 'react-router-dom'
// const App = () => {
//   const Wrapped=(props)=>{
//     const navigate=useNavigate()
//     const location = useLocation()
//     return (<RegistrationForm {...props} navigate={navigate} location={location}/>)
//   }
//   const Wrapped2=(props)=>{
//     const navigate=useNavigate()
//     const location = useLocation()
//     return (<RegistrationSuccess {...props} navigate={navigate} location={location}/>)
//   }
//   return (
//     <BrowserRouter>

//       <Routes>
//         <Route path='/' element={<Wrapped/>}/> 
//         <Route path='/successfulRegistration' element={<Wrapped2/>}/>

//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App


// import { Component } from "react";
// import Event from "./Components/Events";

// import { BrowserRouter } from 'react-router-dom'
// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Event />


//       </BrowserRouter>)
//   }
// }
// export default App


// import { Component } from "react";
// import GitHubRepose from "./Components/GithubRepos";
// class App extends Component{
//   render(){
//     return (<div>
//         <GitHubRepose/>
//     </div>)
//   }

// }
// export default App




// import { Component } from "react";
// import AlertNotifications from "./Components/AlertNotifications";
// class App extends Component{
//   render(){
//     return (<div>
//         <AlertNotifications>
//           <h1 className="successCol">Success</h1>
//           <p>You can access all the files in the folder</p>
//         </AlertNotifications>
//         <AlertNotifications>
//           <h1 className="failureCol">Failure</h1>
//           <p>You cannot access files in the folder</p>
//         </AlertNotifications>
//     </div>)
//   }

// }
// export default App



// import { Component } from "react";
// import ReactPlayer from "react-player";
// class App extends Component{
//   render(){
//     return (<div>
//        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'/>
//     </div>)
//   }

// }
// export default App




// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Legend,
//   ResponsiveContainer,
// } from "recharts"

// const data = [
//   {
//     group_name: "Group A",
//     boys: 200,
//     girls: 400,
//   },
//   {
//     group_name: "Group B",
//     boys: 3000,
//     girls: 500,
//   },
//   {
//     group_name: "Group C",
//     boys: 1000,
//     girls: 1500,
//   },
//   {
//     group_name: "Group D",
//     boys: 700,
//     girls: 1200,
//   },
// ]

// const App = () => {
//   const DataFormatter = (number) => {
//     if (number > 1000) {
//       return `${(number / 1000).toString()}k`
//     }
//     return number.toString()
//   }

//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <BarChart
//         data={data}
//         margin={{
//           top: 5,
//         }}
//       >
//         <XAxis
//           dataKey="group_name"
//           tick={{
//             stroke: "gray",
//             strokeWidth: 1,
//           }}
//         />
//         <YAxis
//           tickFormatter={DataFormatter}
//           tick={{
//             stroke: "gray",
//             strokeWidth: 0,
//           }}
//         />
//         <Legend
//           wrapperStyle={{
//             padding: 30,
//           }}
//         />
//         <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
//         <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
//       </BarChart>
//     </ResponsiveContainer>
//   )
// }

// export default App






// import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

// const data = [
//   {
//     count: 809680,
//     language: "Telugu",
//   },
//   {
//     count: 4555697,
//     language: "Hindi",
//   },
//   {
//     count: 12345657,
//     language: "English",
//   },
// ]

// const App = () => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <PieChart>
//         <Pie
//           cx="70%"
//           cy="40%"
//           data={data}
//           startAngle={0}
//           endAngle={360}
//           innerRadius="40%"
//           outerRadius="70%"
//           dataKey="count"
//         >
//           <Cell name="Telugu" fill="#fecba6" />
//           <Cell name="Hindi" fill="#b3d23f" />
//           <Cell name="English" fill="#a44c9e" />
//         </Pie>
//         <Legend
//           iconType="circle"
//           layout="vertical"
//           verticalAlign="middle"
//           align="right"
//         />
//       </PieChart>
//     </ResponsiveContainer>
//   )
// }

// export default App

// import ReactPopUp from "./Components/ReactPopup"

// const App = () => {
//  return <ReactPopUp />
// }
// export default App


// import { Component } from "react";
// import ConfigurationController from "./Components/ConfigurationController";
// import Layout from "./Components/Layout";
// import ConfigurationContext from "./Components/ConfigurationContext";
// class App extends Component {
//     state = { showContent: true, showLeftNavbar: true, showRightNavbar: true }
//     changeShowContentState = () => {
//         this.setState((prevState) => ({ showContent: !prevState.showContent }))
//     }
//     changeShowLeftNavbarState = () => {
//         this.setState((prevState) => ({ showLeftNavbar: !prevState.showLeftNavbar }))
//     }
//     changeShowRightNavbarState = () => {
//         this.setState((prevState) => ({ showRightNavbar: !prevState.showRightNavbar }))
//     }
//     render() {
//         let { showContent, showLeftNavbar, showRightNavbar } = this.state
//         return (<div>
//             <ConfigurationContext.Provider value={{showContent,showLeftNavbar,showRightNavbar,changeShowContentState:this.changeShowContentState,changeShowLeftNavbarState:this.changeShowLeftNavbarState,changeShowRightNavbarState:this.changeShowRightNavbarState}}>
//                 <ConfigurationController />
//             </ConfigurationContext.Provider>

//             <Layout showContent={showContent} showLeftNavbar={showLeftNavbar} showRightNavbar={showRightNavbar} />
//         </div>)
//     }
// }
// export default App




// import { Component } from "react";
// import ThemeContext from "./Components/ThemeContext";
// import ThemeNavbar from "./Components/ThemeNavbar";
// class App extends Component{
//   state={themeValue:true}
//   toggleTheme=()=>{
//       this.setState((prevState)=>({themeValue:!prevState.themeValue}))
//   }
//   render(){
//     let {themeValue}=this.state
//     return (<ThemeContext.Provider value={{themeValue,toggleTheme:this.toggleTheme}}>
//        <ThemeNavbar/> 
//     </ThemeContext.Provider>)
//   }
// }
// export default App




// NXT WATCH APPLICATION

import { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useParams } from "react-router-dom";
import NxtHome from "./Components/NxtHome";
import NxtTrending from "./Components/NxtTrending";
import NxtLoginForm from "./Components/NxtLoginForm";
import NxtGaming from "./Components/NxtGaming";
import NxtSavedVideos from "./Components/NxtSavedVideos";
import NxtProtectedRoute from "./Components/NxtProtectedRoute";
import NotFound from "./Components/NotFound";
import NxtVideoDetails from "./Components/NxtVideoDetails";
import NxtContext from "./Components/NxtContext";

import { useNavigate } from "react-router-dom";
class App extends Component {

  state={videosCart:[],isDark:false,isSaved:false}
  render() {
    let {videosCart,isDark,isSaved}=this.state
    const LoginWrapper = (props) => {
      const Navigate = useNavigate()
      return <NxtLoginForm Navigate={Navigate} />
    }
    const VideoDetailsWrapper=(props)=>{
      const params=useParams()
      return <NxtVideoDetails {...{...props,match:params}}/>
    }
    const addVideoToCart=(addedVideo)=>{
        let {videosCart}=this.state
        videosCart.forEach((eachVal)=>{
            if (eachVal.isSaved){
                videosCart.isSaved=false
            }
            else if(eachVal.isSaved===false){
                videosCart.isSaved=true
            }
            
        })
        this.setState((prevState)=>({videosCart:[...prevState.videosCart,addedVideo]}),console.log(videosCart))
    }
    const changeTheme=()=>{
        this.setState((prevState)=>({isDark:!prevState.isDark}))
    }
   
    return (<BrowserRouter>
      
      <NxtContext.Provider value={{videosCart:videosCart,addVideoToCart:addVideoToCart,isDarkTheme:isDark,changeTheme:changeTheme}}>
      <Routes>
      
      <Route path="/login" element={<LoginWrapper />} />
        <Route element={<NxtProtectedRoute />}>
        
          <Route path="/" element={<NxtHome />} />
          <Route path="/trending" element={<NxtTrending />} />
          <Route path="/gaming" element={<NxtGaming />} />
          <Route path="/saved-videos" element={<NxtSavedVideos />} />
          <Route path="/videos/:id" element={<VideoDetailsWrapper />} />
          
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </NxtContext.Provider>
    </BrowserRouter>)
  }
}
export default App



// import DisplayStatus from "./Components/DisplayStatus"
// const App=()=>{
//     return (<div>
//         <DisplayStatus/>
//     </div>)
// }
// export default App



// import PasswordValidator from "./Components/PasswordValidator"
// const App=()=>{
//     return (<div>
//         <PasswordValidator/>
//     </div>)
// }
// export default App



// import CreditCard from "./Components/CreditCard"
// const App=()=>{
//     return (<div>
//         <CreditCard/>
//     </div>)
// }
// export default App



// import ReadMoreLess from "./Components/ReadMoreLess"
// const App=()=>{
//     return (<div>
//         <ReadMoreLess/>
//     </div>)
// }
// export default App




// import NotesCon from "./Components/Notes"
// const App=()=>{
//     return (<div>
//         <NotesCon/>
//     </div>)
// }
// export default App