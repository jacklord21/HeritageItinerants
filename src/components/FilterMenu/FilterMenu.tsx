import React, { useEffect, useRef } from "react";
import './filterMenu.css';
import FilterMenuItem from '@/components/FilterMenuItem/FilterMenuItem';

interface FilterMenuProps {
    children?: React.ReactElement<typeof FilterMenuItem> | React.ReactElement<typeof FilterMenuItem>[];
    className?: string;
    visible?: boolean;
    onRequestClose?: () => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
    children,
    className,
    visible = false,
    onRequestClose,
}) => {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!visible) return;

        const handleOutside = (e: MouseEvent | TouchEvent) => {
            const target = e.target as Node;
            if (rootRef.current && !rootRef.current.contains(target)) {
                onRequestClose && onRequestClose();
            }
        };

        document.addEventListener('mousedown', handleOutside);
        document.addEventListener('touchstart', handleOutside);

        return () => {
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('touchstart', handleOutside);
        };
    }, [visible, onRequestClose]);

    return (
        <div ref={rootRef} className={className}>
            {children}
        </div>
    );
};

export default FilterMenu;