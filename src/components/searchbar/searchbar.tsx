"use client";


import React from "react";
import './searchbar.css'
import ExtractorComponent from "@/app/dataExtractor";

export default function SearchBar() {
    const extractor = ExtractorComponent.getInstance();

    const ArgumentFilter = (e: any) => {
        extractor.filterByName(e.target.value);
    };

    return (
        <div className="searchBarMainContainer">
            <div className="leftSearchContainer">
                <input type="text" name="toSearch" onChange={(e) => ArgumentFilter(e)} placeholder="Cerca un progetto" className="outline-none font-roboto font-regular text-black text-15"/>
            </div>
            {/*
            <div className="rightSearchContainer">
                <button>
                    <img src="/images/lente.svg" alt="Icona" className="mr-2 items-center w-full h-full"/>
                </button>
            </div>
            */}
        </div>
    )
}