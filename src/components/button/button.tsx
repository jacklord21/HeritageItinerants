import React from 'react';

interface ButtonProps {
    className?: string;
    text?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    className,
    text,
    children,
    onClick,
}) => {
    return (
        <button type="button" className={className} onClick={onClick}>
            <div className="filterVoice font-roboto font-regular text-voice">{text}</div>
            {children}
        </button>
    );
};

export default Button;