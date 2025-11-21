import React from 'react';

interface ButtonProps {
    backgroundColor?: string;
    borderRadius?: string;
    fontSize?: string;
    height?: string;
    imageUrl?: string;
    padding?: string;
    text?: string;
    width?: string;
}


const Button: React.FC<ButtonProps> = ({
    backgroundColor,
    borderRadius,
    fontSize,
    height,
    imageUrl,
    padding,
    text,
    width,
}) => {
    return (
        <button
            type="submit"
            className="text-white"
            style={{
                backgroundColor: backgroundColor || "transparent",
                borderRadius: borderRadius || '0px',
                fontSize: fontSize || "10",
                padding: padding || '0px',
                width: width || 'inherit',
                height: height || 'inherit',}}
        >
            {imageUrl && <svg path={imageUrl} className="mr-2 items-center w-full h-full ml-auto mr-auto"/>}

        </button>
    );
};

export default Button;