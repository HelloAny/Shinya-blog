import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Button = (props) => {
  const { children, className, style } = props;
  return (
    <div className={className + " button__item"} style={style}>
      <span>{children}</span>
    </div>
  );
};

Button.defaultProps = {
  className: "",
  style: {},
};

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
