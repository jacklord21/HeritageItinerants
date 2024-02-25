import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import React from "react";
import Header from "@/app/header/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function ExploreLayout( {children}:{children: React.ReactNode} )
{
    return (
        <html lang="it">
            <body className="bg-white">
                <Header
                    viewSearchBar={false}
                    progettiEnabled={true}
                    contribuisciEnabled={true}
                    aboutEnabled={false}/>
                {children}
            </body>
        </html>
    )
}
