"use client";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import React, {useState} from "react";
import Header from "@/app/header/header";
import Footer from "@/app/footer/footer";

const inter = Inter({ subsets: ['latin'] })


export default function ExploreLayout({children}: {children: React.ReactNode}) {
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
                    viewSearchBar={true}
                    progettiEnabled={true}
                    contribuisciEnabled={true}
                    aboutEnabled={true}
                />
            {children}
            </body>
            </html>
    )
}
