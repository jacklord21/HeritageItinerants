"use client";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import React, {useState} from "react";
import Header from "@/app/header/header";
import Footer from "@/app/footer/page";

const inter = Inter({ subsets: ['latin'] })


export default function ExploreLayout({children}: {children: React.ReactNode}) {
    return (
            <html lang="it">
            <body className="bg-white" style={{position: "relative", justifyContent: "center"}}>
            <div>
                <Header
                    viewSearchBar={true}
                    progettiEnabled={false}
                    contribuisciEnabled={true}
                    aboutEnabled={true}
                />
                {children}
            </div>
            </body>
            </html>
    )
}
