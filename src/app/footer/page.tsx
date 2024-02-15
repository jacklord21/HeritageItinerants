import Link from "next/link";
import SearchBar from "@/components/searchbar/searchbar";
import Button from "@/components/button/button";
import React from "react";


export default function Footer() {
    return (
        <div style={{gap: "20px", justifyContent: "center", display: "flex", flexDirection: "row", position: "fixed", bottom: 40, backgroundColor: "red", left: 0, right: 0}}>
            <div style={{display: "flex", flexDirection: "row", gap: "30px", paddingTop: 5, paddingBottom: 5,}}>
                <div>
                    <text className="font-mont font-bold uppercase">Filtra per</text>
                </div>
                <div style={{display: "flex", flexDirection: "row",gap: "15px"}}>
                    <div className="font-roboto font-regular">Collaborativo</div>
                    <div className="font-roboto font-regular">Data di creazione</div>
                    <div className="font-roboto font-regular">Modalità di fruizione</div>
                    <div className="font-roboto font-regular">Materiale Disponibile</div>
                    <div className="font-roboto font-regular">Topic</div>
                </div>
            </div>
            <div className="h-auto" style={{borderLeft: "solid #000000"}}/>
            <div style={{ paddingTop: 5, paddingBottom: 5,}}>
                <text className="font-mont font-bold uppercase">Layout</text>
            </div>
        </div>


        /*
        <div style={{position: "fixed", bottom: 0, left: 0, right: 0}}>
            <div className="text-black leftContainer">
                <p className="font-mont font-bold"><Link href="/"> HERITAGE ITINERANTS </Link></p>
                <p className="font-roboto font-regular">Progetti</p>
                <p className="font-roboto font-regular">Contribuisci al progetto</p>
                <p className="font-roboto font-regular"><Link href="../about/"> About Us </Link></p>
            </div>
            <div className="rightContainer">
                <SearchBar/>
                <Button
                    //    onClick={() => {}}
                    backgroundColor="#000000"
                    borderRadius="5px"
                    imageUrl={"images/person.svg"}
                    width={"60px"}
                />
            </div>
        </div>*/
    )



}