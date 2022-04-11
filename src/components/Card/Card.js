import React from "react";
import PropsTypes from "prop-types";
import "./Card.css";

function Card({ variant, children, ...restProps }) {
  return (
    <div className={`wrapper wrapper-${variant}`} {...restProps}>
      {children}
    </div>
  );
}

export default React.memo(Card);

Card.propTypes = {
  variant: PropsTypes.oneOf(["default", "success", "primary", "info"]),
};

Card.defaultProps = {
  variant: "default",
};
