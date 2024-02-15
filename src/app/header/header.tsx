import React from "react";
import './header.css'
import Link from "next/link"
import SearchBar from "@/components/searchbar/searchbar";


export default function Header() {
    return (
        <div className="mainContainer">
            <div className="leftContainer">
                <p className="font-mont font-bold text-title text-black"><Link href="/">HERITAGE ITINERANTS</Link></p>
                <div className="leftContainerLinks">
                    <p className="font-roboto font-regular text-voice text-black">Progetti</p>
                    <p className="font-roboto font-regular text-voice text-black">Contribuisci al progetto</p>
                    <p className="font-roboto font-regular text-voice text-black"><Link href="../about"> About Us </Link></p>
                </div>
            </div>
            <div className="rightContainer">
                <SearchBar/>
                <button>
                    <img src="/images/person.svg"/>
                </button>
            </div>
        </div>
    )
}