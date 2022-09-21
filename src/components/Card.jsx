import React from "react";

const Card = (props) => {
  return (
    <>
      <h4>
        {props.heading} {props.date}
      </h4>
      <h4>{props.major}</h4>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </>
  );
};

export default Card;
