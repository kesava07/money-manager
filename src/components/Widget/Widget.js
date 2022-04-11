import React from "react";
import Card from "../Card/Card";
import Heading from "../Heading/Heading";

function Widget({ data }) {
  console.log("WIDGET IS RENDERING");
  if (data === null) {
    throw new Error("I crashed!");
  }
  return (
    <>
      {data.map(({ title, variant, amount }, index) => {
        return (
          <div key={index} className="col-lg-4">
            <Card variant={variant}>
              <small>{title}</small>
              <Heading title={`Rs. ${amount}`} />
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default React.memo(Widget);
