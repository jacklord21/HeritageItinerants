"use client";

import './propose.css'
import React from "react";
import {useRouter} from "next/navigation";

export default function Propose() {
    const router = useRouter();
    const goBack = () => {
        router.back();
    };

    const propose = () => {
        console.log("Proponed.")
    };

    return (
        <div className="content">
            <div className="body">
                <div className="div divTitle">
                    <p className="partecipa">
                        <span className="font-roboto font-semibold text-35">Contribuisci</span>
                        <span className="font-roboto font-regular text-35"> al progetto Heritage Itinerants</span>
                    </p>
                    <p className="font-roboto font-regular text-20">
                        Heritage Itinerants ti dà la possibilità di contribuire a questa raccolta. Inserisci tutti i dati del
                        progetto che intendi proporre per poi sottoporcelo.
                    </p>
                </div>
                <div className="form">
                    <div className="div">
                        <div className="font-roboto font-regular text-16 label">Autore</div>
                        <div className="textCont">
                            <input type={"text"} className="textField text-black" placeholder="Inserisci il nome (persona/e fisica o istituzione) del creatore del progetto" />
                        </div>
                    </div>
                    <div className="div">
                        <div className="font-roboto font-regular text-16 label">Nome del progetto</div>
                        <div className="textCont">
                            <input type={"text"} className="textField text-black" placeholder="Inserisci qui il nome del progetto" />
                        </div>
                    </div>
                    <div className="div-2">
                        <div className="div">
                            <div className="font-roboto font-regular text-16 label">Data di creazione</div>
                            <div className="textCont">
                                <input type={"date"} className="textField text-black"/>
                            </div>
                        </div>
                        <div className="div">
                            <div className="font-roboto font-regular text-16 label">Indirizzo sito web</div>
                            <div className="textCont">
                                <input type={"url"} className="textField text-black" placeholder="https://www.example.com" />
                            </div>
                        </div>
                    </div>
                    <div className="div-3">
                        <div className="font-roboto font-regular text-16 label">Immagini:</div>
                        <div className="imgContBig">
                            <input type={"image"} className="imageField" src={"/images/imagePicker.svg"} />
                        </div>
                    </div>
                    <div className="div-3">
                        <div className="font-roboto font-regular text-16 label">Descrizione</div>
                        <div className="textContBig">
                            <textarea className="textFieldBig" placeholder="Inserisci qui una descrizione generale del progetto che desideri proporre." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottoni-wrapper">
                <div className="bottoni">
                    <button onClick={propose} className="proponi-button">
                        <div className="overlap-group">
                            <span className="text font-roboto font-regular text-16 text-white">Proponi</span>
                        </div>
                    </button>
                    <button onClick={goBack} className="annulla-button">
                        <div className="overlap-group">
                            <span className="text font-roboto font-regular text-16 text-black">Annulla</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}