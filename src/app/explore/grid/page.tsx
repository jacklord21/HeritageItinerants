"use client";

import React, { useEffect, useState } from 'react';
import Footer from '@/app/footer/footer';
import './grid.css';
import { uuid } from 'uuidv4';
import Link from 'next/link';
import ItemDiv from '@/app/itemDiv/itemDiv';
import ExtractorComponent from '@/app/dataExtractor';
import eventEmitter from "@/Emitter";

export default function Grid() {
    const extractor = ExtractorComponent.getInstance();

    const [list, setList] = useState(ExtractorComponent.getInstance().getDati().projects);
    const [orderMenuVisible, setOrderMenuVisible] = useState(false);
    const [rotAngle, setRotAngle] = useState(0);
    const [menuText, setMenuText] = useState("Anno");
    const [nameUpBackColor, setNameUpBackColor] = useState("white");
    const [yearUpBackColor, setYearUpBackColor] = useState("white");
    const [nameDownBackColor, setNameDownBackColor] = useState("white");
    const [yearDownBackColor, setYearDownBackColor] = useState("white");


    useEffect(() => {
        const handleListaCambiata = (nuovaLista:  {projects: {}}) => {
            setList(nuovaLista);
        };

        eventEmitter.on('listaCambiata', handleListaCambiata);
        eventEmitter.emit("searchViewStateChanged", true);
        ExtractorComponent.getInstance().resetDati();
        handleOrderMenuNameUpClick("Nome (A-Z)", (a, b) => {return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0})
        setOrderMenuVisible(false);


        return () => {
            eventEmitter.off('listaCambiata', handleListaCambiata);
        };
    }, []);

    const handleOrderMenuArrowClick = () => {
        setOrderMenuVisible(!orderMenuVisible);
        setRotAngle(rotAngle => (rotAngle === 180 ? 0 : 180));
    }
    const handleOrderMenuNameUpClick = (textValue: string, func: (a: any, b: any) => number) => {
        setNameUpBackColor("#CCD1D2");
        setNameDownBackColor("#fff");
        setYearUpBackColor("#fff");
        setYearDownBackColor("#fff");
        setMenuText(textValue);
        handleOrderMenuVoiceClick(textValue, func);
    }
    const handleOrderMenuNameDownClick = (textValue: string, func: (a: any, b: any) => number) => {
        setNameDownBackColor("#CCD1D2");
        setNameUpBackColor("#fff");
        setYearUpBackColor("#fff");
        setYearDownBackColor("#fff");
        setMenuText(textValue);
        handleOrderMenuVoiceClick(textValue, func);
    }

    const handleOrderMenuDateUpClick = (textValue: string, func: (a: any, b: any) => number) => {
        setYearUpBackColor("#CCD1D2");
        setYearDownBackColor("#fff");
        setNameDownBackColor("#fff");
        setNameUpBackColor("#fff");
        setMenuText(textValue);
        handleOrderMenuVoiceClick(textValue, func);
    }
    const handleOrderMenuDateDownClick = (textValue: string, func: (a: any, b: any) => number) => {
        setYearDownBackColor("#CCD1D2");
        setYearUpBackColor("#fff");
        setNameDownBackColor("#fff");
        setNameUpBackColor("#fff");
        setMenuText(textValue);
        handleOrderMenuVoiceClick(textValue, func);
    }

    const handleOrderMenuVoiceClick = ( (value: string, func: (a: any, b: any) => number) => {
        setOrderMenuVisible(!orderMenuVisible);
        setRotAngle(rotAngle => (rotAngle === 180 ? 0 : 180));
        extractor.orderBy(func);
    })




    const slides = Object.entries(list).map(([key, project]: [string, any]) => ({
        key: uuid(),
        content: (
            <Link
                key={key}
                href={{
                    pathname: '/explore/project/detail',
                    query: {
                        project: encodeURIComponent(JSON.stringify(project))
                    }
                }}
            >
                <ItemDiv
                    width={"fit-content"}
                    height={"fit-content"}
                    imageHeight={"140px"}
                    textActive={true}
                    imageUrl={project.mainImagePath}
                    projectName={project.name}
                />
            </Link>
        ),
    }));

    return (
        <div className="mainGridContainer">
            <div className="dropdown">
                <label className="textOrdina font-roboto font-semibold text-18">Ordina per:</label>
                <div className="frame">
                    <div className="headline-wrapper">
                        <div className="headline">{menuText}</div>
                    </div>
                    <img style={{ transform: "rotate(" + rotAngle + "deg)" }} src="/images/arrowdown.svg" alt="Icona" className="gridImage mr-2 items-center" onClick={handleOrderMenuArrowClick}/>
                    <div className={` ${orderMenuVisible ? 'orderMenu' : 'menuClose'}`}>
                        <div style={{backgroundColor: nameUpBackColor}} className="orderMenuItem font-roboto font-regular text-voice" onClick={(e) => handleOrderMenuNameUpClick("Nome (A-Z)", (a: any, b: any) => {return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0})}>
                            Nome (A-Z)
                        </div>
                        <div style={{backgroundColor: nameDownBackColor}} className="orderMenuItem font-roboto font-regular text-voice" onClick={(e) => handleOrderMenuNameDownClick("Nome (Z-A)", (a: any, b: any) => {return (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0})}>
                            Nome (Z-A)
                        </div>
                        <div style={{backgroundColor: yearUpBackColor}} className="orderMenuItem font-roboto font-regular text-voice" onClick={(e) => handleOrderMenuDateUpClick("Anno di creazione (crescente)", (a: any, b: any) => {return a.year - b.year})}>
                            Anno di creazione (crescente)
                        </div>
                        <div style={{backgroundColor: yearDownBackColor}} className="orderMenuItem font-roboto font-regular text-voice" onClick={(e) => handleOrderMenuDateDownClick("Anno di creazione (decrescente)", (a: any, b: any) => {return b.year - a.year})}>
                            Anno di creazione (decrescente)
                        </div>
                    </div>
                </div>
            </div>
            <div className="gridCompContainer">
                {slides.map((item, index) => (
                    <div key={index}>{item.content}</div>
                ))}
            </div>
            <Footer gridClickEnabled={false} ringClickEnabled={true} />
        </div>
    );
}
