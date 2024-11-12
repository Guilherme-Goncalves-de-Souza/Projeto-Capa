import React from "react";  

import { 
    CentredRow,
    TabsContainer,
    TabItem
} from "./styled";
  

export default function ToggleTab(props){

    const action = item => {
        if(props.onClick){
            props.onClick(item)
        }
    }

    return ( 
        <>  
            <CentredRow>
                <TabsContainer>
                    {
                        props.options ?
                            props.options.map((item, key) => 
                                <TabItem key={key} active={props.active === key} onClick={() => action(key)}>{ item.title }</TabItem>
                            )
                        : null
                    } 
                </TabsContainer>
            </CentredRow> 
        </>
    );
}