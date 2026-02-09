import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="/src/assets/gift.png" alt="" />
        <span className="birthdayText">
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
        </span>
      </div>

      <img className="rightbarAd" src="/src/assets/ad.png" alt="" />

      <h4 className="rightbarTitle">Online Friends</h4>

      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );
};

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="/src/assets/profiles/1.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Smith</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/src/assets/profiles/2.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">James Christ</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/src/assets/profiles/3.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/src/assets/profiles/4.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">sarah Ali</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/src/assets/profiles/5.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Thomas Holden</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/src/assets/profiles/6.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Enma Watson</span>
        </div>
      </div>
    </>
  );
};

const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
