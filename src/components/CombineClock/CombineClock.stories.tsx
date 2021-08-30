import React from 'react';

import CombineClock from "./CombineClock";


export default {
    title: 'CombineClock',
    component: CombineClock,
};
export const BaseDigitalExample = () => {
    return <CombineClock mode={'digital'}/>;
}
export const BaseAnalogExample = () => {
    return <CombineClock mode={'analog'}/>;
}







