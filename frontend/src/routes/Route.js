import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// import { Container } from './styles';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
