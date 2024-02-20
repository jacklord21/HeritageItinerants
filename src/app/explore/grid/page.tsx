"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";

export default function Grid() {
    const items = [
        <div key={1} style={{ backgroundColor: 'lightcoral', height: '100px' }}>1</div>,
        <div key={2} style={{ backgroundColor: 'lightgreen', height: '100px' }}>2</div>,
        <div key={3} style={{ backgroundColor: 'lightskyblue', height: '100px' }}>3</div>,
        <div key={4} style={{ backgroundColor: 'lightgoldenrodyellow', height: '100px' }}>4</div>,
        // Aggiungi ulteriori elementi
    ];

    const responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 4 }, // Imposta il numero massimo di colonne a 4 su schermi più grandi
    };

    return (
        <AliceCarousel
            items={items}
            responsive={responsive}
            autoPlay
            autoPlayInterval={2000}
            infinite
        />
    );
}