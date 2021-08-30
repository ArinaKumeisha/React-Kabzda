import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

export const Clock = () => {
    const [clock, setClock] = useState(getTime())
    useEffect(() => {
        setInterval(() => {
            setClock(getTime())
        }, 1000)
    })

    function getTime() {
        let data = new Date()
        let hours = data.getHours() < 10 ? '0' + data.getHours() : data.getHours()
        let minutes = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()
        let seconds = data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()
        return {hours, minutes, seconds}
    }

    return (
        <h3 className={s.clock}>
            {clock.hours + ' ' + clock.minutes + ' ' + clock.seconds}
        </h3>
    );
};


