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
    return (
        <div className="cbtMainContainer">
            <input type="checkbox" disabled={disabled} onChange={onChange} />
            <label className="font-roboto font-regular text-voice">{text}</label>
        </div>
    );
}

export default CheckboxWithText;