import React from "react"; 

import {
    MoreInfosItemContent,
    MoreInfosImage,
    MoreInfosItemText
} from './styled' 

export default function MoreInfosItem(props){ 

    return ( 
        <> 
            <MoreInfosItemContent secondary={props.secondary}>
                <MoreInfosImage image={props.image} />
                <MoreInfosItemText>
                    { props.title }
                </MoreInfosItemText>
            </MoreInfosItemContent> 
        </>
    );
}