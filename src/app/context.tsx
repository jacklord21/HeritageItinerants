"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutContextProps {
    showFooter: boolean;
    setShowFooter: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

interface LayoutProviderProps {
    children: ReactNode;
}


export const LayoutProvider: React.FC<LayoutProviderProps> =  ({ children }) => {
    const [showFooter, setShowFooter] = useState(true);

    return (
        <LayoutContext.Provider value={{ showFooter, setShowFooter }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }
    return context;
};