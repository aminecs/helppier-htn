import React from 'react';

//css
import './FriendsLeaderboardItem.css';

//icons
import Person1Img from '../../helppier assets/person 1.png';
import Person2Img from '../../helppier assets/person 2.png';
import Person3Img from '../../helppier assets/person 3.png';
import Person4Img from '../../helppier assets/person 4.png';
import Person5Img from '../../helppier assets/person 5.png';

function FriendsLeaderboardItem(props) {
  return (
    <div className = "friendsLeaderboardItem">
        <div className = "friendsLeaderboardItemProfilePicture">
            <img src = {props.index === 1 ? Person1Img : props.index === 2 ? Person2Img : props.index === 3 ? Person3Img : ProcessingInstruction.index === 4 ? Person4Img : Person5Img}
              width = {50}
              alt = ""/>
        </div>
        <div className = "friendsLeaderboardItemName">
            Amine B
        </div>
        <div className = "friendsLeaderboardItemPoints">
            36,000 pts
        </div>
    </div>
  );
}

export default FriendsLeaderboardItem;