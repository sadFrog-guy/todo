import React, {FC, useEffect, useState} from 'react';
import cl from './DateBlock.module.css'
import Clock from "../Clock/Clock";

const DateBlock = () => {
    const [time, setTime] = useState<Date>(new Date())
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 60000)
    }, [])

    return (
        <div>
            <div className={cl.date_wrapper}>
                <div className={cl.current_date}>
                    {days.map((day, index) => {
                        if(time.getDay() === index) {
                            return <p className={cl.day}>{day}</p>
                        }
                    })}
                    <p className={cl.date}>
                        {time.toLocaleDateString().slice(0, time.toLocaleDateString().length - 1)}
                    </p>
                </div>
                <Clock time={time}/>
            </div>
        </div>
    );
};

export default DateBlock;
