import React from "react";
import './header.css'
import Link from "next/link"
import SearchBar from "@/components/searchbar/searchbar";
import {redirect} from "next/navigation";

interface HeaderProps {
    viewSearchBar: boolean;
    progettiEnabled: boolean;
    contribuisciEnabled: boolean;
    aboutEnabled: boolean;
    //   onClickFunc: () => void;
}



const Header: React.FC<HeaderProps> = ({viewSearchBar, progettiEnabled, contribuisciEnabled, aboutEnabled}) => {
    return (
            <div className="mainContainer">
                <div className="leftContainer">
                    <p className="font-mont font-bold text-title text-black"><Link href="/" passHref>HERITAGE ITINERANTS</Link></p>
                    <div className="leftContainerLinks">
                        <p className="font-roboto font-regular text-voice text-black">
                            {progettiEnabled ? <Link href="../explore/ring"> Progetti </Link> : "Progetti"}
                        </p>
                        <p className="font-roboto font-regular text-voice text-black">
                            {contribuisciEnabled ? <Link href="../propose"> Contribuisci al progetto </Link> : "Contribuisci al progetto"}
                        </p>
                        <p className="font-roboto font-regular text-voice text-black">
                            {aboutEnabled ? <Link href="../about"> About Us </Link> : "About Us"}
                        </p>
                    </div>
                </div>
                <div className="rightContainer">
                    {viewSearchBar && <SearchBar/>}
                    <button>
                        <img src="/images/person.svg"/>
                    </button>
                </div>
            </div>
    )
}

export default Header;