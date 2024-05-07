import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import "./style.css";

const NavigationItem = (props) => {
    const {name, slug, isFlag} = props;
    const flagStyle = isFlag ? "red" : "";
    return (
        <li className="nav-item">
            <NavLink to={slug} className="nav-link" aria-current="page" style={{color: flagStyle}}>{name}</NavLink>
        </li>
    )
};

NavigationItem.propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    isFlag: PropTypes.bool
}

NavigationItem.defaultProps = {
    isFlag: false,
}

export default NavigationItem
