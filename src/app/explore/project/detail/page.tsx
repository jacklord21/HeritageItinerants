"use client";

import React, {useEffect} from 'react';
import './detail.css';
import attr from '../../../../projAttr.json';
import eventEmitter from '../../../../Emitter';

export default function DetailPage ({ searchParams }: { searchParams: any }) {
    const data = JSON.parse(decodeURIComponent(searchParams.project));

    useEffect(() => {
        eventEmitter.emit("searchViewStateChanged", false);
    }, []);

    return (
            <div className="mainDetailContainer">
                <div className="nomeProgetto font-mont font-semibold text-50 text-black">
                    <p>{data.name}</p>
                </div>
                <div className="progetti">
                    <div className="left-side">
                        <div className="detail">
                            <div className="campi">
                                <div className="detailFrame">
                                    <div className="text-wrapper-detail font-mont font-medium text-25 text-black">Autore:</div>
                                    <div className="text-wrapper-detail font-mont font-medium text-25 text-black">Data di creazione:</div>
                                    <div className="text-wrapper-detail font-mont font-medium text-25 text-black">Indirizzo sito web:</div>
                                    <div className="text-wrapper-detail font-mont font-medium text-25 text-black">Fruizione:</div>
                                </div>
                                <div className="frame-2">
                                    <div className="text-wrapper-detail-2 font-roboto font-regular text-19 text-black">{data.mainData.author}</div>
                                    <div className="text-wrapper-detail-2 font-roboto font-regular text-19 text-black">{data.year}</div>
                                    <a href={data.mainData.webAddress} target="_blank" className="text-wrapper-detail-2">
                                        <div className=" font-roboto font-regular text-19 text-black">{data.mainData.webAddress}</div>
                                    </a>
                                    <div className="fruition">
                                        {data.fruition.map((mod: any, index: number) => (
                                            <div key={index} className="API">
                                                <div className="rectangle">
                                                    <div className="text-wrapper-detail-2 font-roboto font-regular text-19 text-black">
                                                        {attr.fruition[mod]}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="foto">
                            <img className="mainImage" src={data.mainImagePath} style={{objectFit: data.objectFit}}/>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="descrizione">
                            <div className="text-wrapper-detail font-mont font-medium text-25 text-black">Descrizione</div>
                            <p className="projDesc font-roboto font-regular text-19 text-black">
                                {data.desc}
                            </p>
                        </div>
                        <div id="parent" className="immagini font-roboto font-regular text-20 text-black">
                            <div className="text-wrapper-detail font-mont font-medium text-25 text-black">Immagini</div>
                                    <div id="parent" className="gallery">
                                    {data.images.map((image: any, index: number) => (
                                        <img className="image" style={{width: data.width}} src={image.imagePath} alt={image.name} key={index} />
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};