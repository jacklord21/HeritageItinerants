"use client";

import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { uuid } from 'uuidv4';
import { config } from "react-spring";
import dynamic from "next/dynamic";


export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 6,
        showNavigation: true,
        config: config.gentle,
        isDragging: false,
        dragStartX: 0,
        sensitivity: 0.005, // Regola la sensibilità dello scorrimento del mouse
        minGoToSlide: 0,
        maxGoToSlide: 7,
    };

    slides = [
        {
            key: uuid(),
            content:
                <div  style={{ display: "flex", flexDirection: 'column', backgroundColor: 'red'}}>
                <div style={{ background: "#000", width: '330px', height: '186px', color: 'white'}}>
                1
                <text>Text of the main</text>
            </div>
                    </div>
        },
        {
            key: uuid(),
            content: <div style={{ background: "#000", width: '330px', height: '186px', color: 'white'}}>
                <img src={'/images/lente.svg'}/>
            </div>
        },
        {
            key: uuid(),
            content: <div style={{ background: "#000", width: '330px', height: '186px', color: 'white'}}>
                3
            </div>
        },
        {
            key: uuid(),
            content: <div style={{ background: "#000", width: '330px', height: '186px', color: 'white'}}>
                4
            </div>
        },
        {
            key: uuid(),
            content: <div style={{ background: "#000", width: '330px', height: '186px', color: 'white'}}>
                5
            </div>
        },
        {
            key: uuid(),
            content: <div style={{ background: "#000", width: '330px', height: '186px', color: 'white'}}>
                6
            </div>
        },
        {
            key: uuid(),
            content: <div style={{ background: "#000", width: '330px', height: '186px', color: 'white'}}>
                7
            </div>
        },
        {
            key: uuid(),
            content: <div style={{ background: "#000", width: '330px', height: '186px', color: 'white'}}>
                8
            </div>
        },
    ];

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
            <div style={{ width: "90%", height: "500px", margin: "0 auto", backgroundColor: 'green' }}
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