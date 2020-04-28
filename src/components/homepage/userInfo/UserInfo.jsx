import React from "react";
import "./user.scss";

const UserInfo = (props) => {
  console.log(props);
  const user = props.details;
  return (
    <div className="user-info">
      <div className="user-left">
        <img src={user.image} alt="userImg" />
      </div>
      <div className="user-right">
        <h2>Name: {user.fullname}</h2>
        <h3>username: {user.username}</h3>
        <h3>Sector/Focus: {user.sector}</h3>
        <p>{user.desc}</p>
      </div>
    </div>
  );
};

export default UserInfo;
