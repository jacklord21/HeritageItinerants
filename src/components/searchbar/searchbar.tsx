import React from "react";
import './searchbar.css'

export default function SearchBar() {
    return (
        <form className="searchBarMainContainer">
            <div className="leftSearchContainer">
                <input type="text" name="toSearch" className="outline-none font-roboto font-regular"/>
            </div>
            <div className="rightSearchContainer">
                <button className="button" type="submit">
                    <img src="/images/lente.svg" alt="Icona" className="mr-2 items-center w-full h-full ml-auto mr-auto"/>
                </button>
            </div>
        </form>
    )
}