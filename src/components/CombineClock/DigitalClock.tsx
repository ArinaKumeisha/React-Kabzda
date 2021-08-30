import React from "react";
import {ClocksType} from "./CombineClock";

export const getToString = (num: number) => num < 10 ? '0' + num : num
export const DigitalClock: React.FC<ClocksType> = props => {
    const {data} = props
    return (
        <div>
            <span>{getToString(data.getHours())}</span>:
            <span>{getToString(data.getMinutes())}</span>:
            <span>{getToString(data.getSeconds())}</span>
        </div>
    )
}