import React, {FC} from 'react';
import cl from './Clock.module.css'

const Clock: FC<{time: Date}> = ({time}) => {
    return (
        <p className={cl.time}>
            {time.toLocaleTimeString().substring(0, 5)}
        </p>
    );
};

export default Clock;
