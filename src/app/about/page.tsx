import Image from 'next/image'
import React from "react";
import './about.css';

export default function Page() {
    return (
        <div className="mainAboutContainer">
            <div className="aboutTitle font-mont font-semibold text-50 text-black">
                <p>About us</p>
            </div>
            <div>
                <p className="aboutDesc font-roboto font-regular text-20">
                    HERITAGE EXPEDITION si presenta come un archivio dedicato alla conservazione e diffusione di progetti strettamente legati al patrimonio culturale, espresso in molteplici forme quali documenti, fotografie, opere {"d'arte"} e molto altro ancora. La piattaforma mira ad essere un punto di riferimento per {"l'esplorazione"} di questa tipologia di iniziative, offrendo {"un'esperienza"} (che risulti essere esaustiva) di consultazione, in costante evoluzione ed inerente a un vasto insieme di progetti che abbracciano tematiche come la storia e l’arte.<br/>
                    {"L'ambiente"} virtuale che contiene tutto ciò si caratterizza per una multiforme ricchezza di materiale culturale: l’utente avrà {"l'opportunità"} di esplorare e ammirare oggetti come opere {"d'arte"} (e le connessioni tra le stesse), monumenti storici (con annesso il loro significato) e siti archeologici.
                    <br/><br/>Ogni progetto sarà corredato da contenuti approfonditi e dettagliati, come:
                    <ul>
                        <li>autore</li>
                        <li>data di creazione</li>
                        <li>info generali</li>
                        <li>immagini relative allo stesso</li>
                        <li>modalità di fruizione</li>
                    </ul>
                    Anno di creazione e modalità di fruizione saranno utilizzati anche come criteri di filtraggio, insieme ai seguenti:
                    <ul>
                        <li>possibilità per gli utenti di aggiungere contenuti (progetto collaborativo)</li>
                        <li>tipologia di contenuto disponibile (come immagini, sculture, dipinti)</li>
                        <li>argomenti su cui il progetto si concentra (come arte, storia, architettura)</li>
                    </ul>
                <br/>Copyright © 2024 Giacomo Matteucci. All rights reserved.
                </p>
            </div>
        </div>
    )
}
