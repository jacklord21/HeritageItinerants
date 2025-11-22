import React from 'react';
import './filterMenuItem.css';

interface FilterMenuItemProps {
    children?: React.ReactNode;
    className?: string;
}

const Button: React.FC<FilterMenuItemProps> = ({
    children,
    className,
}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Button;