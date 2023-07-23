import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
