"use client";

import React, { useState, useRef, useEffect } from "react";
import './footer.css'
import Link from "next/link";
import MultiRangeSlider from "@/components/MultiRangeSlider/MultiRangeSlider";
import ExtractorComponent from "@/app/dataExtractor";
import Button from "@/components/button/button";
import FilterMenuItem from "@/components/FilterMenuItem/FilterMenuItem";
import FilterMenu from "@/components/FilterMenu/FilterMenu";
import CheckboxWithText from "@/components/CheckboxWithText/CheckboxWithText";


interface FooterProps {
    ringClickEnabled: boolean;
    gridClickEnabled: boolean;
}



const Footer: React.FC<FooterProps> = ({ ringClickEnabled, gridClickEnabled }: FooterProps) => {
    const extractor = ExtractorComponent.getInstance();

    const [collMenuVisible, setCollMenuVisible] = useState(false);
    const [dateMenuVisible, setDateMenuVisible] = useState(false);
    const [fruiMenuVisible, setFruiMenuVisible] = useState(false);
    const [contMenuVisible, setContMenuVisible] = useState(false);
    const [argMenuVisible, setArgMenuVisible] = useState(false);
    const footerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (footerRef.current && !footerRef.current.contains(e.target as Node)) {
                setCollMenuVisible(false);
                setDateMenuVisible(false);
                setFruiMenuVisible(false);
                setContMenuVisible(false);
                setArgMenuVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleCollClick = (e: any) => {
        console.log('handleCollClick fired. collMenuVisible=', collMenuVisible);
        setCollMenuVisible(!collMenuVisible);
        setDateMenuVisible(false);
        setFruiMenuVisible(false);
        setContMenuVisible(false);
        setArgMenuVisible(false);
    };
    const handleDateClick = () => {
        console.log('handleDateClick fired. dateMenuVisible=', dateMenuVisible);
        setDateMenuVisible(!dateMenuVisible);
        setCollMenuVisible(false);
        setFruiMenuVisible(false);
        setContMenuVisible(false);
        setArgMenuVisible(false);
    };
    const handleFruiClick = () => {
        console.log('handleFruiClick fired. fruiMenuVisible=', fruiMenuVisible);
        setFruiMenuVisible(!fruiMenuVisible);
        setCollMenuVisible(false);
        setDateMenuVisible(false);
        setContMenuVisible(false);
        setArgMenuVisible(false);
    };
    const handleContClick = () => {
        console.log('handleContClick fired. contMenuVisible=', contMenuVisible);
        setContMenuVisible(!contMenuVisible);
        setCollMenuVisible(false);
        setDateMenuVisible(false);
        setFruiMenuVisible(false);
        setArgMenuVisible(false);
    };
    const handleArgClick = () => {
        console.log('handleArgClick fired. argMenuVisible=', argMenuVisible);
        setArgMenuVisible(!argMenuVisible);
        setCollMenuVisible(false);
        setDateMenuVisible(false);
        setFruiMenuVisible(false);
        setContMenuVisible(false);
    };


    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const YesCollaborativeFilter = (e: any) => {
        if (e.target.checked) {
            setCheckbox1Checked(!checkbox1Checked);
            extractor.filterByCollaborative(true);
        }
        else {
            extractor.filterByCollaborative(true);
            setCheckbox1Checked(!checkbox1Checked);
        }
    };
    const NoCollaborativeFilter = (e: any) => {
        if (e.target.checked) {
            setCheckbox2Checked(!checkbox2Checked);
            extractor.filterByCollaborative(false);
        }
        else {
            extractor.filterByCollaborative(false);
            setCheckbox2Checked(!checkbox2Checked);
        }
    };

    const FruitionFilter = (code: number, e: any) => {
        extractor.filterByFruition(code);
    };

    const ContentFilter = (code: number, e: any) => {
        extractor.filterByCont(code);
    };

    const ArgumentFilter = (code: number, e: any) => {
        extractor.filterByArg(code);
    };



    return (
        <div className="mainFooterContainer" ref={footerRef}>
            <div className="footerLeftPartContainer">
                <div>
                    <text className="font-mont font-bold uppercase">Filtra per</text>
                </div>
                <div className="footerLeftPartContentContainer">
                    <Button className={`filterOption ${collMenuVisible ? 'menuOpen' : ''}`} onClick={handleCollClick} text="Collaborativo">
                        <FilterMenu className={` ${collMenuVisible ? 'filterMenu' : 'menuClose'}`} >
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Sì" disabled={checkbox2Checked} onChange={(e) => YesCollaborativeFilter(e)} />
                            </FilterMenuItem >
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="No" disabled={checkbox1Checked} onChange={(e) => NoCollaborativeFilter(e)} />
                            </FilterMenuItem>
                        </FilterMenu>
                    </Button>

                    <Button className={`filterOption ${dateMenuVisible ? 'menuOpen' : ''}`} onClick={handleDateClick} text="Anno di creazione">
                        <FilterMenu className={` ${dateMenuVisible ? 'filterMenu' : 'menuClose'}`}>
                            <FilterMenuItem className="filterMenuSliderItem">
                                <MultiRangeSlider
                                    min={1900}
                                    max={2025}
                                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                />
                            </FilterMenuItem>
                        </FilterMenu>
                    </Button>

                    <Button className={`filterOption ${fruiMenuVisible ? 'menuOpen' : ''}`} onClick={handleFruiClick} text="Modalità di fruizione">
                        <FilterMenu className={` ${fruiMenuVisible ? 'filterMenu' : 'menuClose'}`}>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="App" onChange={(e) => FruitionFilter(0, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Sito web" onChange={(e) => FruitionFilter(1, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="API" onChange={(e) => FruitionFilter(2, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Realtà virtuale" onChange={(e) => FruitionFilter(3, e)} />
                            </FilterMenuItem>
                        </FilterMenu>
                    </Button>

                    <Button className={`filterOption ${contMenuVisible ? 'menuOpen' : ''}`} onClick={handleContClick} text="Contenuto">
                        <FilterMenu className={` ${contMenuVisible ? 'filterMenu' : 'menuClose'}`}>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Disegni" onChange={(e) => ContentFilter(0, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Fotografie" onChange={(e) => ContentFilter(1, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Modelli 3D" onChange={(e) => ContentFilter(2, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Opere d'arte" onChange={(e) => ContentFilter(3, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Registrazioni multimediali" onChange={(e) => ContentFilter(4, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Testi (libri/manoscritti)" onChange={(e) => ContentFilter(5, e)} />
                            </FilterMenuItem>
                        </FilterMenu>
                    </Button>

                    <Button className={`filterOption ${argMenuVisible ? 'menuOpen' : ''}`} onClick={handleArgClick} text="Argomento">
                        <FilterMenu className={` ${argMenuVisible ? 'filterMenu' : 'menuClose'}`}>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Archeologia" onChange={(e) => ArgumentFilter(0, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Architettura" onChange={(e) => ArgumentFilter(1, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Arte" onChange={(e) => ArgumentFilter(2, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Letteratura" onChange={(e) => ArgumentFilter(3, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Religione" onChange={(e) => ArgumentFilter(4, e)} />
                            </FilterMenuItem>
                            <FilterMenuItem className="filterMenuItem">
                                <CheckboxWithText text="Storia" onChange={(e) => ArgumentFilter(5, e)} />
                            </FilterMenuItem>
                        </FilterMenu>
                    </Button>
                </div>
            </div>

            <div className="verticalBar h-auto" />

            <div className="footerLeftPartContainer footerRightPartContainer">
                <div>
                    <text className="font-mont font-bold uppercase">Layout</text>
                </div>
                <div className="footerRightPartContentContainer">
                    {ringClickEnabled ? <Link href="../explore/ring" onClick={() => extractor.resetDati()}> <img src="/images/ringIcon.svg" /> </Link> : <img src="/images/ringIcon.svg" />}
                    {gridClickEnabled ? <Link href="../explore/grid" onClick={() => extractor.resetDati()}> <img src="/images/gridIcon.svg" /> </Link> : <img src="/images/gridIcon.svg" />}
                </div>
            </div>
        </div>
    )
}



export default Footer;