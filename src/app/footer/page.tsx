import React from "react";
import './footer.css'
import Link from "next/link";


interface FooterProps {
    ringClickEnabled: boolean;
    gridClickEnabled: boolean;
}



const Footer:  React.FC<FooterProps> = ({ringClickEnabled, gridClickEnabled}) => {
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
                    {ringClickEnabled ? <Link href="../explore/ring"> <img src="/images/ringIcon.svg"/> </Link> : <img src="/images/ringIcon.svg"/>}
                    {gridClickEnabled ? <Link href="../explore/grid"> <img src="/images/gridIcon.svg"/> </Link> : <img src="/images/gridIcon.svg"/>}
                </div>
            </div>
        </div>
    )
}




export default Footer;