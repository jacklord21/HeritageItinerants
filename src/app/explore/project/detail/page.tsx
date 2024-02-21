import React from 'react';
import './detail.css';
import Footer from "@/app/footer/page";

export default function DetailPage ({ searchParams }: { searchParams: any }) {
    const data = JSON.parse(decodeURIComponent(searchParams.project));


    return (
        <div className="App">
            <div className="mainDetailContainer">
                <div className="nomeProgetto font-mont font-semibold text-70 text-black">
                    <p>{data.name}</p>
                </div>
                <div className="progetti">
                    <div className="left-side">
                        <div className="detail">
                            <div className="campi">
                                <div className="frame">
                                    <div className="text-wrapper-detail font-mont font-medium text-25 text-black">Autore:</div>
                                    <div className="text-wrapper-detail font-mont font-medium text-25 text-black">Data di creazione:</div>
                                    <div className="text-wrapper-detail font-mont font-medium text-25 text-black">Indirizzo sito web:</div>
                                    <div className="text-wrapper-detail font-mont font-medium text-25 text-black">Fruizione:</div>
                                </div>
                                <div className="frame-2">
                                    <div className="text-wrapper-detail-2 font-roboto font-regular text-19 text-black">{data.mainData.author}</div>
                                    <div className="text-wrapper-detail-2 font-roboto font-regular text-19 text-black">{data.mainData.date}</div>
                                    <div className="text-wrapper-detail-2 font-roboto font-regular text-19 text-black">{data.mainData.webAddress}</div>
                                    <div className="fruition">
                                        {data.fruition.map((mod: any, index: number) => (
                                            <div key={index} className="API">
                                                <div className="rectangle">
                                                    <div className="text-wrapper-detail-2 font-roboto font-regular text-19 text-black">
                                                        {mod}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="foto">
                            <img className="mainImage" src={data.mainImagePath}/>
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
                                        <img className="image" src={image.imagePath} alt={image.name} key={index} />
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};