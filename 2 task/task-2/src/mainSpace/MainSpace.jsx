import React from "react";
import './MainSpace.css'

import { MainSpaceLeft } from "./mainSpaceLeft/MainSpaceLeft";
import { MainSpaceRight } from "./mainSpaceRight/MainSpaceRight";

function MainSpace () {
    return(
        <div className="main_space_wrapper">
            <MainSpaceLeft />
            <div className="buble"></div>
            <MainSpaceRight />
        </div>
    )
}

export { MainSpace }