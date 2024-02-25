"use client";

import { Inter } from 'next/font/google'
import '../globals.css'
import React, {useEffect, useState} from "react";
import Header from "@/app/header/header";
import eventEmitter from '../../Emitter';

const inter = Inter({ subsets: ['latin'] })


export default function ExploreLayout({children}: {children: React.ReactNode}) {
    const [searchView, setSearchView] = useState(true);

    useEffect(() => {
        const handleSearchViewState= (state:  boolean) => {
            setSearchView(state);
        };

        eventEmitter.on('searchViewStateChanged', handleSearchViewState);

        return () => {
            eventEmitter.off('searchViewStateChanged', handleSearchViewState);
        };
    }, []);


    return (
            <html lang="it">
            <body className="bg-white" style={{
                justifyContent: "center",
                width: "100%",
                height: "100vh",
                maxHeight: "100vh",
                overflow: "hidden"
            }}>
                <Header
                    viewSearchBar={searchView}
                    progettiEnabled={false}
                    contribuisciEnabled={true}
                    aboutEnabled={true}
                />
            {children}
            </body>
            </html>
    )
}
