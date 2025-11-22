import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./multiRangeSlider.css";
import ExtractorComponent from "@/app/dataExtractor";

const MultiRangeSlider = ({ min, max, onChange }: { min: number; max: number; onChange: any}) => {
    const extractor = ExtractorComponent.getInstance();
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement | null>(null);


    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);


    return (
        <div>
            Imposta il range di anni:
            <div className="container">
                <div className="slider">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={minVal}
                        onChange={(event) => {
                            const value = Math.min(Number(event.target.value), maxVal - 1);
                            setMinVal(value);
                            minValRef.current = value;
                            extractor.filterByYear(value, maxVal);
                        }}
                        className="thumb thumb--left"
                        style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
                    />
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={maxVal}
                        onChange={(event) => {
                            const value = Math.max(Number(event.target.value), minVal + 1);
                            setMaxVal(value);
                            maxValRef.current = value;
                            extractor.filterByYear(minVal, value);
                        }}
                        className="thumb thumb--right"
                    />

                    <div className="slider__track" />
                    <div ref={range} className="slider__range" />
                    <div className="font-roboto font-regular text-voice slider__left-value">{minVal}</div>
                    <div className="font-roboto font-regular text-voice slider__right-value">{maxVal}</div>
                </div>
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
