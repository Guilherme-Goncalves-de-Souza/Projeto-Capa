import React from "react";  
import { 
    HowWorkStep,
    HowWorkStepNumber,
    HowWorkStepTitle,
    HowWorkStepLine,
    HowWorkStepText
} from "./styled"; 

export default function HowWorksItem(props){ 
    return ( 
        <> 
            <HowWorkStep>
                <HowWorkStepNumber variant={props.variant}>{props.number}</HowWorkStepNumber>
                <HowWorkStepTitle>{props.subtitle}</HowWorkStepTitle>
                <HowWorkStepLine />
                <HowWorkStepText dangerouslySetInnerHTML={{ __html:props.text }} />
            </HowWorkStep> 
        </>
    );
}