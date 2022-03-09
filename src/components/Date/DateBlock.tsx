import React, {FC, useEffect, useState} from 'react';
import cl from './DateBlock.module.css'
import Clock from "../Clock/Clock";

const DateBlock = () => {
    const [time, setTime] = useState<Date>(new Date())
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

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
                        {time.toLocaleDateString()}
                    </p>
                </div>
                <Clock time={time}/>
            </div>
        </div>
    );
};

export default DateBlock;