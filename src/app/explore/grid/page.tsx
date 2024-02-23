"use client";

import React, { useEffect, useState } from 'react';
import {Footer} from '@/app/footer/page';
import './grid.css';
import { uuid } from 'uuidv4';
import Link from 'next/link';
import ItemDiv from '@/app/itemDiv/itemDiv';
import ExtractorComponent from '@/app/dataExtractor';
import eventEmitter from "@/Emitter";

export default function Grid() {
    const [list, setList] = useState(ExtractorComponent.getInstance().getDati().projects);

    useEffect(() => {
        const handleListaCambiata = (nuovaLista:  {projects: {}}) => {
            setList(nuovaLista);
        };

        eventEmitter.on('listaCambiata', handleListaCambiata);

        return () => {
            eventEmitter.off('listaCambiata', handleListaCambiata);
        };
    }, []);


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
                    textActive={true}
                    imageUrl={project.mainImagePath}
                    projectName={project.name}
                />
            </Link>
        ),
    }));

    return (
        <div style={{ boxSizing: 'border-box', overflow: 'hidden', width: '100%', height: '100%' }}>
            <div className="gridCompContainer">
                {slides.map((item, index) => (
                    <div key={index}>{item.content}</div>
                ))}
            </div>
            <Footer gridClickEnabled={false} ringClickEnabled={true} />
        </div>
    );
}
