import React from "react";
import './searchbar.css'

export default function SearchBar() {
    return (
        <form className="searchBarMainContainer">
            <div className="leftSearchContainer">
                <input type="text" name="toSearch" placeholder="Cerca un progetto" className="outline-none font-roboto font-regular text-black text-15"/>
            </div>
            <div className="rightSearchContainer">
                <button type="submit">
                    <img src="/images/lente.svg" alt="Icona" className="mr-2 items-center w-full h-full"/>
                </button>
            </div>
        </form>
    )
}