"use client";

import React, {Component, useEffect} from "react";
import Carousel from "react-spring-3d-carousel";
import { uuid } from 'uuidv4';
import { config } from "react-spring";
import ItemDiv from "@/app/itemDiv/itemDiv";
import Link from "next/link";
import ExtractorComponent from "@/app/dataExtractor";



export default class Example extends Component {



    data = ExtractorComponent.getInstance().getDati();

    state = {
        goToSlide: 0,
        offsetRadius: 3,
        showNavigation: true,
        config: config.gentle,
        isDragging: false,
        dragStartX: 0,
        sensitivity: 0.005, // Regola la sensibilità dello scorrimento del mouse
        minGoToSlide: 0,
        maxGoToSlide: 7,
    };



    slides = Object.entries(this.data.projects).map(([key, project]: [string, any]) => ({
        key: uuid(),
        content: (
            <Link href={{ pathname: '/explore/project/detail', query: {
                        project: encodeURIComponent(JSON.stringify(project))
                    }
                }}
            >
                <ItemDiv
                    width={"330px"}
                    height={"fit-content"}
                    textActive={true}
                    imageUrl={project.mainImagePath}
                    projectName={project.name}
                />
            </Link>
        ),
    }));



    handleMouseDown = (event: any) => {
        this.setState({
            isDragging: true,
            dragStartX: event.clientX,
        });
    };

    handleMouseMove = (event: any) => {
        if (this.state.isDragging) {
            const deltaX = event.clientX - this.state.dragStartX;
            const slideDelta = deltaX * this.state.sensitivity;

            this.setState((prevState: any) => ({
                goToSlide: Math.max(
                    Math.min(prevState.goToSlide - slideDelta, prevState.maxGoToSlide),
                    prevState.minGoToSlide
                ),
                dragStartX: event.clientX,
            }));
        }
    };

    handleMouseUp = () => {
        this.setState({
            isDragging: false,
        });
    };

    handleWheel = (event: any) => {
        if (event.deltaY < 0) {
            this.setState({ goToSlide: this.state.goToSlide - 1 });
        } else {
            this.setState({ goToSlide: this.state.goToSlide + 1 });
        }
    };



    render() {
        return (
            <div style={{zIndex: "0", backgroundColor: "lightcoral", justifyContent: "center", alignItems: "center", width: "90%", height: "350px", margin: "auto", overflow: "hidden"}}
                 onWheel={this.handleWheel}
              /*   onMouseDown={this.handleMouseDown}
                 onMouseMove={this.handleMouseMove}
                 onMouseUp={this.handleMouseUp}*/
            >
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    animationConfig={this.state.config}
                 showNavigation={false}/>
            </div>
        );
    }
}