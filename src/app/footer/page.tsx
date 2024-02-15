import React from "react";
import './footer.css'


export default function Footer() {
    return (
        <div className="mainFooterContainer">
            <div className="footerLeftPartContainer">
                <div>
                    <text className="font-mont font-bold uppercase">Filtra per</text>
                </div>
                <div className="footerLeftPartContentContainer">
                    <div className="font-roboto font-regular text-voice">Collaborativo</div>
                    <div className="font-roboto font-regular text-voice">Data di creazione</div>
                    <div className="font-roboto font-regular text-voice">Modalità di fruizione</div>
                    <div className="font-roboto font-regular text-voice">Materiale Disponibile</div>
                    <div className="font-roboto font-regular text-voice">Topic</div>
                </div>
            </div>

            <div className="verticalBar h-auto"/>

            <div className="footerLeftPartContainer footerRightPartContainer">
                <div>
                    <text className="font-mont font-bold uppercase">Layout</text>
                </div>
                <div className="footerRightPartContentContainer">
                    <button>
                        <img src="/images/ringIcon.svg"/>
                    </button>
                    <button>
                        <img src="/images/gridIcon.svg"/>
                    </button>
                </div>
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