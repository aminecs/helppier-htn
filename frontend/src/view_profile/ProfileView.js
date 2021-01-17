import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';

//css
import './ProfileView.css';

//icons
import { FaEdit } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { GiAlliedStar } from 'react-icons/gi'; 
import { BsStarFill } from 'react-icons/bs';

//components
import MainMenu from '../main_menu/MainMenu';
import FriendsLeaderboardItem from './FriendsLeaderboardItem/FriendsLeaderboardItem';
import RequestedItem from './RequestedItem/RequestedItem';
import MyTaskItem from './MyTaskItem/MyTaskItem';
import CompanyLogo from './CompanyLogo/CompanyLogo';


//images
import Person1Img from '../helppier assets/person 1.png';
import StarbucksImg from '../helppier assets/starbucks.png';
import AmazonImg from '../helppier assets/amazon.png';
import BarnesAndNobleImg from '../helppier assets/barnesandnoble.png';
import TargetImg from '../helppier assets/target.png';
import WWFImg from '../helppier assets/wwf.png';
import SalvationArmyImg from '../helppier assets/salvationarmy.png';
import FeedingAmerica from '../helppier assets/feedingamerica.png';
import BCRFImg from '../helppier assets/BCRF.png';
import ThankyouPurchaseView from './ThankyouPurchaseView/ThankyouPurchaseView';


function ProfileView() {
  const [redeemVisible, toggleRedeemVisible] = useState(false);
  const [reedemedPageVisible, toggleReedemedPageVisible] = useState(false);
  const [selectedRedeemItem, selectSelectedRedeemItem] = useState(null);

  //data
  const [myUser, setMyUser] = useState(null);
  const [topUsers, setTopUsers] = useState([]);
  const [postedJobs, setPostedJobs] = useState([]);
  const [volunteeredJobs, setVolunteeredJobs] = useState([]);

  //component did mount
  useEffect(() => {
    fetch("http://localhost:5000/api/users/top").then((response => response.json()))
      .then((data) => {
        setTopUsers(data.users.slice(Math.max(data.users.length - 5, 0)).reverse())
    });
    fetch(`http://localhost:5000/api/users/${Cookies.get("userId")}/posted_jobs`).then((response => response.json()))
      .then((data) => {
        setPostedJobs(data.jobs)
    });
    fetch(`http://localhost:5000/api/users/${Cookies.get("userId")}/volunteered_jobs`).then((response => response.json()))
      .then((data) => {
        setVolunteeredJobs(data.jobs)
    });
    fetch("http://localhost:5000/api/user/" + Cookies.get("userId")).then((response => response.json()))
      .then((data) => {
        if(data.user){
          setMyUser(data.user);
        }
      })
  }, [])

  function redeemGift(){
    if(!redeemVisible){
      toggleRedeemVisible(true);
    }
    else{
      toggleReedemedPageVisible(true);
      toggleRedeemVisible(false);
    }
  }

  if(myUser){
  return (
    <div className = "profileView">
      <MainMenu />
      {!reedemedPageVisible ? 
      <div className = "profileViewContainer">
        <div className = "profileViewLeft">
          <div className = "profileViewUserInfo">
            <div className = "profileViewProfilePicture"><img src = {Person1Img} width={100} alt = ""/></div>
            <div className = "profileViewEditButton"><FaEdit size = {20} color = "#F58424"/></div>
            <div className = "profileViewName">{myUser.firstname} {myUser.lastname}</div>
            <div className = "profileViewBio">{myUser.bio ? myUser.bio : "This is my bio..."}</div>
            <div className = "profileViewLocation"><MdLocationOn size = {20} color = "#F58424"/>&nbsp;Southwark, London</div>
            <div className = "profileViewEmail"><HiOutlineMail size = {20} color = "#F58424"/>&nbsp;{myUser.email}</div>
            <div className = "profileViewPhone"><HiOutlinePhone size = {20} color = "#F58424"/>&nbsp;{myUser.mobile_phone ? myUser.mobile_phone : "No phone"}</div>
          </div>
          <div className = "profileViewFriendLeaderboard">
            <div className= "profileViewFriendLeaderboardHeader">Friend Leaderboard</div>
            <div className = "friendsLeaderboardContainer">
              {topUsers.map((item, index) => {
                return(
                  <FriendsLeaderboardItem
                    {...item}
                    key = {index}
                    index = {index}/>
                )
              })}
            </div>
          </div>
        </div>
        <div className = "profileViewRight">
          <div className = "profileViewYourPoints">
            <div className = "profileViewYourPointsHeader">Your Points</div>
            <div className = "profileViewYourPointsBody">
              <div className = "profileViewYourPointsBodyHeader">
                <div className = "profileViewYourPointsBodyHeaderPoints"><GiAlliedStar />&nbsp;{myUser.rewards} Points</div>
                <div><b>Level: Neighbourhood Champ</b></div>
              </div>
              <div className = "profileViewYourPointsBody">
                <div className = "pointsIndicator">
                  <div className = "pointsIndicatorFill">
                    <div className = "pointsIndicatorFillStar" style ={{position: "absolute", transform: "translateY(-20%)", left: 550}}>
                      <BsStarFill size={20} color="white"/>
                    </div>
                    <div style ={{position: "absolute", transform: "translateY(160%)", left: 525, color: "#F58424"}}><b>{myUser.rewards} points</b></div>
                  </div>
                  <div style ={{position: "absolute", transform: "translateY(50%)", left: 725}}><b>10 points</b></div>
                </div>
              </div>
              {redeemVisible &&
                <div className = "redeemContainer">
                  <div><b>Congrats! You can currently redeem $6. Select a gift card of your choice:</b></div>
                  <div className = "reddemComapnyLogos">
                    <CompanyLogo
                      image = {StarbucksImg}
                      isSelected = {selectedRedeemItem === "starbucks"}
                      value = "starbucks"
                      selectSelectedRedeemItem = {selectSelectedRedeemItem}/>
                    <CompanyLogo
                      value = "amazon"
                      image = {AmazonImg}
                      isSelected = {selectedRedeemItem === "amazon"}
                      selectSelectedRedeemItem = {selectSelectedRedeemItem}/>
                    <CompanyLogo
                      value = "bn"
                      image = {BarnesAndNobleImg}
                      isSelected = {selectedRedeemItem === "bn"}
                      selectSelectedRedeemItem = {selectSelectedRedeemItem}/>
                    <CompanyLogo
                      value = "target"
                      image = {TargetImg}
                      isSelected = {selectedRedeemItem === "target"}
                      selectSelectedRedeemItem = {selectSelectedRedeemItem}/>
                  </div>
                  <div><b>You also have the option of donating your rewards to a charity:</b></div>
                  <div className = "reddemComapnyLogos">
                   <CompanyLogo
                    value = "wwf"
                    image = {WWFImg}
                    isSelected = {selectedRedeemItem === "wwf"}
                    selectSelectedRedeemItem = {selectSelectedRedeemItem}/>
                   <CompanyLogo
                    value = "tsa"
                    image = {SalvationArmyImg}
                    isSelected = {selectedRedeemItem === "tsa"}
                    selectSelectedRedeemItem = {selectSelectedRedeemItem}/>
                    <CompanyLogo
                      value = "fa"
                      image = {FeedingAmerica}
                      isSelected = {selectedRedeemItem === "fa"}
                      selectSelectedRedeemItem = {selectSelectedRedeemItem}/>
                    <CompanyLogo
                      value = "bcrf"
                      image = {BCRFImg}
                      isSelected = {selectedRedeemItem === "bcrf"}
                      selectSelectedRedeemItem = {selectSelectedRedeemItem}/>
                  </div>
                </div>}
              <div className = "profileViewYourPointsFooter">
                <div className = "">Every 10 points earns you $10 at a local retailer of your choice!</div>
                <div className = "redeemBtn" onClick = {redeemGift}>Redeem</div>
              </div>
            </div>
          </div>
          <div className = "profileViewMyRequest">
            <div className = "profileViewYourPointsHeader">Your Request</div>
            {postedJobs.map((value, index) => {
              return(
                <RequestedItem
                  key = {index}
                  index = {index}
                  {...value}/>
              )
            })}
          </div>
          <div className = "profileViewMyRequest">
            <div className = "profileViewYourPointsHeader">People You've Helped</div>
            {volunteeredJobs.map((job, index) => {
              return(
                <MyTaskItem
                  key = {index}
                  index = {index}
                  {...job}/>
            )})}
          </div>
        </div>
      </div> : 
      <ThankyouPurchaseView
        toggle = {toggleReedemedPageVisible}/>}
    </div>
  );
              }
              else{
                return (null);
              }
}

export default ProfileView;