import React from 'react';
import './itemDiv.css';
import {ScrollView} from "react-native";

interface itemDivProps {
    imageUrl: string
    projectName: string
    textActive: boolean
    width: string
    height?: string
}


const ItemDiv: React.FC<itemDivProps> = ({imageUrl, projectName, textActive, width, height}) => {

    return (
        <div className="divItem" style={{width: width, height: height,}}>
            <img className="image" src={imageUrl}/>
            {
                textActive ? < div className="text font-roboto font-semibold text-21 text-black">{projectName}</div> : <></>
            }
        </div>
    );
};

export default ItemDiv;