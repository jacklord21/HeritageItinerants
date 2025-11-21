"use client";

import React, {useState} from "react";
import './footer.css'
import Link from "next/link";
import MultiRangeSlider from "@/components/MultiRangeSlider/MultiRangeSlider";
import ExtractorComponent from "@/app/dataExtractor";


interface FooterProps {
    ringClickEnabled: boolean;
    gridClickEnabled: boolean;
}



const Footer:  React.FC<FooterProps> = ({ringClickEnabled, gridClickEnabled}: FooterProps) => {
    const extractor = ExtractorComponent.getInstance();

    const [collMenuVisible, setCollMenuVisible] = useState(false);
    const [dateMenuVisible, setDateMenuVisible] = useState(false);
    const [fruiMenuVisible, setFruiMenuVisible] = useState(false);
    const [contMenuVisible, setContMenuVisible] = useState(false);
    const [argMenuVisible, setArgMenuVisible] = useState(false);
    const handleCollClick = (e: any) => {
        setCollMenuVisible(!collMenuVisible);
        setDateMenuVisible(false);
        setFruiMenuVisible(false);
        setContMenuVisible(false);
        setArgMenuVisible(false);
    };
    const handleDateClick = () => {
        setDateMenuVisible(!dateMenuVisible);
        setCollMenuVisible(false);
        setFruiMenuVisible(false);
        setContMenuVisible(false);
        setArgMenuVisible(false);
    };
    const handleFruiClick = () => {
        setFruiMenuVisible(!fruiMenuVisible);
        setCollMenuVisible(false);
        setDateMenuVisible(false);
        setContMenuVisible(false);
        setArgMenuVisible(false);
    };
    const handleContClick = () => {
        setContMenuVisible(!contMenuVisible);
        setCollMenuVisible(false);
        setDateMenuVisible(false);
        setFruiMenuVisible(false);
        setArgMenuVisible(false);
    };
    const handleArgClick = () => {
        setArgMenuVisible(!argMenuVisible);
        setCollMenuVisible(false);
        setDateMenuVisible(false);
        setFruiMenuVisible(false);
        setContMenuVisible(false);
    };


    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const YesCollaborativeFilter = (e: any) => {
        if(e.target.checked) {
            setCheckbox1Checked(!checkbox1Checked);
            extractor.filterByCollaborative(true);
        }
        else {
            extractor.filterByCollaborative(true);
            setCheckbox1Checked(!checkbox1Checked);
        }
    };
    const NoCollaborativeFilter = (e: any) => {
        if(e.target.checked) {
            setCheckbox2Checked(!checkbox2Checked);
            extractor.filterByCollaborative(false);
        }
        else {
            extractor.filterByCollaborative(false);
            setCheckbox2Checked(!checkbox2Checked);
        }
    };

    const FruitionFilter = (code :number, e: any) => {
        extractor.filterByFruition(code);
    };

    const ContentFilter = (code :number, e: any) => {
        extractor.filterByCont(code);
    };

    const ArgumentFilter = (code :number, e: any) => {
        extractor.filterByArg(code);
    };



    return (
        <div className="mainFooterContainer">
            <div className="footerLeftPartContainer">
                <div>
                    <text className="font-mont font-bold uppercase">Filtra per</text>
                </div>
                <div className="footerLeftPartContentContainer">
                    <div id="helll" className={`filterOption ${collMenuVisible ? 'menuOpen' : ''}`}>
                        <div className="filterVoice font-roboto font-regular text-voice" onClick={handleCollClick}>Collaborativo</div>
                        <div className={` ${collMenuVisible ? 'filterMenu' : 'menuClose'}`}>
                                <div className="filterMenuItem">
                                    <input disabled={checkbox2Checked} type="checkbox" onChange={(e) => YesCollaborativeFilter(e)}/>
                                    <label className="font-roboto font-regular text-voice" >Sì</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input disabled={checkbox1Checked} type="checkbox" onChange={(e) => NoCollaborativeFilter(e)}/>
                                    <label className="font-roboto font-regular text-voice">No</label>
                                </div>
                            </div>
                    </div>
                    <div className={`filterOption ${dateMenuVisible ? 'menuOpen' : ''}`}>
                        <div className="filterVoice font-roboto font-regular text-voice" onClick={handleDateClick}>Anno di creazione</div>
                        <div className={` ${dateMenuVisible ? 'filterMenu' : 'menuClose'}`}>
                                <div className="filterMenuItem">
                                    <MultiRangeSlider
                                        min={1900}
                                        max={2025}
                                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                    />
                                </div>
                            </div>
                    </div>
                    <div className={`filterOption ${fruiMenuVisible ? 'menuOpen' : ''}`}>
                        <div className="filterVoice font-roboto font-regular text-voice" onClick={handleFruiClick}>Modalità di fruizione</div>
                            <div className={` ${fruiMenuVisible ? 'filterMenu' : 'menuClose'}`}>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => FruitionFilter(0, e)}/>
                                    <label className="font-roboto font-regular text-voice">App</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => FruitionFilter(1, e)}/>
                                    <label className="font-roboto font-regular text-voice">Sito web</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => FruitionFilter(2, e)}/>
                                    <label className="font-roboto font-regular text-voice">API</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => FruitionFilter(3, e)}/>
                                    <label className="font-roboto font-regular text-voice">Realtà virtuale</label>
                                </div>
                            </div>
                    </div>
                    <div className={`filterOption ${contMenuVisible ? 'menuOpen' : ''}`}>
                        <div className="filterVoice font-roboto font-regular text-voice" onClick={handleContClick}>Contenuto</div>
                            <div className={` ${contMenuVisible ? 'filterMenu' : 'menuClose'}`}>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ContentFilter(0, e)}/>
                                    <label className="font-roboto font-regular text-voice">Disegni</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ContentFilter(1, e)}/>
                                    <label className="font-roboto font-regular text-voice">Fotografie</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ContentFilter(2, e)}/>
                                    <label className="font-roboto font-regular text-voice">Modelli 3D</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ContentFilter(3, e)}/>
                                    <label className="font-roboto font-regular text-voice">{"Opere d'arte"}</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ContentFilter(4, e)}/>
                                    <label className="font-roboto font-regular text-voice">Registrazioni multimediali</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ContentFilter(5, e)}/>
                                    <label className="font-roboto font-regular text-voice">Testi (libri/manoscritti)</label>
                                </div>
                            </div>
                    </div>
                    <div className={`filterOption ${argMenuVisible ? 'menuOpen' : ''}`}>
                        <div className="filterVoice font-roboto font-regular text-voice" onClick={handleArgClick}>Argomento</div>
                            <div className={` ${argMenuVisible ? 'filterMenu' : 'menuClose'}`}>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ArgumentFilter(0, e)}/>
                                    <label className="font-roboto font-regular text-voice">Archeologia</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ArgumentFilter(1, e)}/>
                                    <label className="font-roboto font-regular text-voice">Architettura</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ArgumentFilter(2, e)}/>
                                    <label className="font-roboto font-regular text-voice">Arte</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ArgumentFilter(3, e)}/>
                                    <label className="font-roboto font-regular text-voice">Letteratura</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ArgumentFilter(4, e)}/>
                                    <label className="font-roboto font-regular text-voice">Religione</label>
                                </div>
                                <div className="filterMenuItem">
                                    <input type="checkbox" onChange={(e) => ArgumentFilter(5, e)}/>
                                    <label className="font-roboto font-regular text-voice">Storia</label>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="verticalBar h-auto"/>

            <div className="footerLeftPartContainer footerRightPartContainer">
                <div>
                    <text className="font-mont font-bold uppercase">Layout</text>
                </div>
                <div className="footerRightPartContentContainer">
                    {ringClickEnabled ? <Link href="../explore/ring" onClick={() => extractor.resetDati()}> <img src="/images/ringIcon.svg"/> </Link> : <img src="/images/ringIcon.svg"/>}
                    {gridClickEnabled ? <Link href="../explore/grid" onClick={() => extractor.resetDati()}> <img src="/images/gridIcon.svg"/> </Link> : <img src="/images/gridIcon.svg"/>}
                </div>
            </div>
        </div>
    )
}



export default Footer;