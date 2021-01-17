import React, { useEffect, useState } from 'react';

//css
import './MyTaskItem.css';

//icons
import Person1Img from '../../helppier assets/person 1.png';
import Person2Img from '../../helppier assets/person 2.png';
import Person3Img from '../../helppier assets/person 3.png';
import Person4Img from '../../helppier assets/person 4.png';
import Person5Img from '../../helppier assets/person 5.png';

function MyTaskItem(props) {
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/user/${props.owner_id}`).then((response => response.json()))
      .then((data) => {
        setOwner(data.user);
    });
  }, [])
  return (
    <div className = "profileViewMyRequestItem">
        <div className = "profileViewHelpProfilePicture">
          <img src = {props.index === 1 ? Person1Img : props.index === 2 ? Person2Img : props.index === 3 ? Person3Img : ProcessingInstruction.index === 4 ? Person4Img : Person5Img}
            width = {50}
            alt = ""/>
        </div>
        <div className = "profileViewMyRequestItemValue">{owner && owner.firstname} {owner && owner.lastname}</div>
        <div className = "profileViewMyRequestItemValue">{props.created_at}</div>
        <div className = "profileViewMyRequestItemValue">{props.job_type}</div>
        <div className = "profileViewMyRequestItemValue">{props.time_needed_mins} mins</div>
        <div className = "profileViewMyRequestItemValue">{props.reward} points</div>
    </div>
  );
}

export default MyTaskItem;