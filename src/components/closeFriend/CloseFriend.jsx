import "./closeFriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="sidebarFriend" data-username={user.username}>
      <img
        className="sidebarFriendImg"
        src={user.profilePicture}
        alt={user.username}
        loading="lazy"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
