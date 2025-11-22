import React from "react";
import "./CheckboxWithText.css";


interface CheckboxWithTextProps {
    text: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const CheckboxWithText: React.FC<CheckboxWithTextProps> = ({
    text,
    disabled = false,
    onChange,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        onChange(e);
    }

    const stopClickPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    return (
        <div className="cbtMainContainer" onClick={stopClickPropagation}>
            <input type="checkbox" disabled={disabled} onChange={handleChange} onClick={stopClickPropagation} />
            <label className="font-roboto font-regular text-voice">{text}</label>
        </div>
    );
}

export default CheckboxWithText;