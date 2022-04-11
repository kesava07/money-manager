import React from "react";
import PropTypes from "prop-types";

export default function Button({
  size,
  variant,
  children,
  className,
  ...restProps
}) {
  const classNames = [`btn btn-${variant} btn-${size}`];
  if (className) {
    classNames.push(className);
  }
  return (
    <button className={classNames.join(" ")} {...restProps}>
      {children}
    </button>
  );
}
Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf([
    "default",
    "success",
    "primary",
    "danger",
    "info",
    "warning",
  ]),
  className: PropTypes.string,
};

Button.defaultProps = {
  size: "md",
  variant: "default",
  className: "",
};
