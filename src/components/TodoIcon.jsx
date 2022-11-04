import React from "react";
import "../styles/TodoIcon.css"
import { ReactComponent as CheckSVG } from "../utilities/svg/circle-check-solid.svg"
import { ReactComponent as DeleteSVG } from "../utilities/svg/square-xmark-solid.svg"

const iconTypes = {
    "check": color => (
        <CheckSVG className="Icon-svg Icon-svg--check" fill={color}/>
    ),
    "delete": color => (
        <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color}/>
    ),
};

function TodoIcon ({ type, color='gray', onClick }) {
    return (
        <span className={`Icon-container Icon-container--${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}
export { TodoIcon }