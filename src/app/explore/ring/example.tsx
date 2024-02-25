import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { uuid } from 'uuidv4';
import ItemDiv from "@/app/itemDiv/itemDiv";
import Link from "next/link";
import ExtractorComponent from "@/app/dataExtractor";
import eventEmitter from "@/Emitter";

const Example = () => {
    const [goToSlide, setGoToSlide] = useState(0);
    const [offsetRadius, setOffsetRadius] = useState(3);
    const [showNavigation, setShowNavigation] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [sensitivity] = useState(0.005);
    const [minGoToSlide] = useState(0);
    const [maxGoToSlide] = useState(7);
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
            <Link href={{
                pathname: '/explore/project/detail',
                query: {
                    project: encodeURIComponent(JSON.stringify(project))
                }
            }}>
                <ItemDiv
                    width={"330px"}
                    height={"fit-content"}
                    imageHeight={"186px"}
                    textActive={true}
                    imageUrl={project.mainImagePath}
                    projectName={project.name}
                />
            </Link>
        ),
    }));

    const handleMouseDown = (event: any) => {
        setIsDragging(true);
        setDragStartX(event.clientX);
    };

    const handleMouseMove = (event: any) => {
        if (isDragging) {
            const deltaX = event.clientX - dragStartX;
            const slideDelta = deltaX * sensitivity;

            setGoToSlide((prevGoToSlide) => Math.max(
                Math.min(prevGoToSlide - slideDelta, maxGoToSlide),
                minGoToSlide
            ));

            setDragStartX(event.clientX);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleWheel = (event: any) => {
        if (event.deltaY < 0) {
            setGoToSlide((prevGoToSlide) => prevGoToSlide + 1);
        } else {
            setGoToSlide((prevGoToSlide) => prevGoToSlide - 1);
        }
    };

    useEffect(() => {
        const handleMouseMoveBound = handleMouseMove;
        const handleMouseUpBound = handleMouseUp;

        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMoveBound);
            document.addEventListener("mouseup", handleMouseUpBound);
        } else {
            document.removeEventListener("mousemove", handleMouseMoveBound);
            document.removeEventListener("mouseup", handleMouseUpBound);
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMoveBound);
            document.removeEventListener("mouseup", handleMouseUpBound);
        };
    }, [handleMouseMove, isDragging]);

    return (
        <div
            style={{
                zIndex: "0",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                height: "350px",
                margin: "auto",
                overflow: "hidden"
            }}
            onWheel={handleWheel}
       //     onMouseDown={handleMouseDown}
        >
            <Carousel
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={false}
            />
        </div>
    );
};

export default Example;
