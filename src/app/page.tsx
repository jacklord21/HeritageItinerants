"use client";

import React from "react";
import './splash.css';
import {router} from "next/client";
import Link from "next/link";
import {Canvas} from "react-three-fiber";

export default async function App() {
    return (
        <div className="mainSplashContainer">

            <div className="splashText">
                <span className="splashTitleText font-mont font-bold text-100 text-black">HERITAGE ITINERANTS</span>
                <span className="splashDescText font-roboto font-regular text-40 text-black">Raccolta di progetti legati al patrimonio culturale provenienti da ogni parte del mondo.</span>
            </div>
            <Link href="./explore/ring" className="button">
                <span className="exploreText font-mont font-normal text-25 text-white">Esplora la raccolta</span>
            </Link>
        </div>
    )





    //return redirect('explore/ring');

}