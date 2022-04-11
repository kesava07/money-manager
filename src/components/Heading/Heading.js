import React from "react";
import PropTypes from "prop-types";

export default function Heading({ title, className, type, ...restProps }) {
  const Element = type;
  const classNames = ["m-0"];
  if (className) {
    classNames.push(className);
  }
  return (
    <Element className={classNames.join(" ")} {...restProps}>
      {title}
    </Element>
  );
}

Heading.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  className: PropTypes.string,
};

Heading.defaultProps = {
  type: "h3",
  className: "",
};
