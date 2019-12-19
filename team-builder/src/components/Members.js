import React from "react";

const Members = props => {
  return (
    <div className="members-list">
      {props.members.map(member => (
        <div className="member" key={member.name}>
          <h2>{member.email}</h2>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;