import React, { useEffect, useRef } from "react";
import './filterMenu.css';
import FilterMenuItem from '@/components/FilterMenuItem/FilterMenuItem';

interface FilterMenuProps {
    children?: React.ReactElement<typeof FilterMenuItem> | React.ReactElement<typeof FilterMenuItem>[];
    className?: string;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
    children,
    className,
}) => {

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default FilterMenu;