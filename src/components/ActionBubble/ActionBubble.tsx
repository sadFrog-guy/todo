import React, {FC} from 'react';
import cl from './ActionBubble.module.css'

interface ActionBubbleProps {
    bubbleColor?: string,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const ActionBubble: FC<ActionBubbleProps> = (
    {
        children,
        bubbleColor = 'royalblue',
        onClick
    }
) => {

    return (
        <div onClick={onClick} className={cl.bubble} style={{backgroundColor: bubbleColor}}>
            {children}
        </div>
    );
};

export default ActionBubble;