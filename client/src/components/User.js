import React, { useState, useRef } from "react";
import { NavLink, useLocation, Route } from "react-router-dom";

const topic = [
  {
    name: "overview",
    id: 1,
  },
  {
    name: "contribution",
    id: 2,
  },
];

const Topic = (props) => {
  const user = props.location.state.value;
  const tab = props.location.pathname.substring(15 + user.username.length);
  if (user === undefined) return null;
  return (
    <div className="topic">
      <h2>{tab}</h2>
    </div>
  );
};

const User = (props) => {
  const ref = useRef();
  const user = props.location.state.value;
  console.log(user);
  const image = "http://localhost:5000/"+user.profile_picture;
  if (user === undefined) return null;
  return (
    <div className="filler">
      <div className="usercard">
        <div
          style={{
            float: `left`,
            height: `300px`,
            width: `300px`,
            padding: `15px`,
          }}
        >
          <img
            src={image}
            style={{
              height: `250px`,
              width: `250px`,
              borderRadius: `50%`,
            }}
          />
        </div>
        <br />
        <div style={{ float: `left`, fontSize: `35px`, marginLeft: `50px` }}>
          <div style={{ fontSize: `35px` }}>
            {user.username} 
          </div>
          <div style={{ fontSize: `20px` }}>
            <a className="fa fa-map-marker"></a> {user.location}
          </div>
          <div style={{ fontSize: `20px`, textTransform: `lowercase` }}>
            <a className="fa fa-envelope"></a> {user.email}
          </div>
        </div>
      </div>
      <ul className="sidelist">
        {topic.map(({ name, id }) => (
          <li key={id} style={{ display: `inline` }}>
            <NavLink
              activeClassName="nav__link--active"
              className="nav__link"
              to={{
                pathname: `/users/search/${user.username}/${name}`,
                state: { value: user },
              }}
              onClick={() => {
                ref.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route path="/users/search/:username/:name" component={Topic} />{" "}
      <div ref={ref}></div>
    </div>
  );
};

export default User;
