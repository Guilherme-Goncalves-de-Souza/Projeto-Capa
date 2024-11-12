import React from "react";   

import { 
    Content, 
    ContentSided,

    HeaderLandpage,
    BodyLandpage,
    BodyLandpageSide,
    BodyLandpageSideItem,
    BodyLandpageSideItemIcon,
    BodyLandpageBody,
    HeaderLandpageItem
    
} from "./styled"; 
import { ThemedComponent } from "ui/theme";
import { useHistory } from "react-router-dom";

export default function SideHeader({ children, sideOptions, sided }){  
  
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`);  

    const action = item => {
        if(item.page){
            navigate(item.page)
        }
        if(item.action && typeof item.action === 'function'){
            item.action()
        }
    }

    return ( 
        <ThemedComponent>
             <ContentSided>
                <HeaderLandpage>
                    {
                        sideOptions.find(fnd => fnd.page === sided || fnd.sided === sided)?.options?.length ? <>
                            {
                                sideOptions.find(fnd => fnd.page === sided || fnd.sided === sided)?.options?.map((item, key) => 
                                    <HeaderLandpageItem key={key} onClick={() => action(item)}>
                                        { item?.title }
                                    </HeaderLandpageItem>
                                )
                            }
                        </> : null
                    }
                </HeaderLandpage>
                <BodyLandpage>
                    <BodyLandpageSide>
                        {
                            sideOptions.map((item, key) =>
                                <BodyLandpageSideItem key={key} active={sided === item?.page || sided === item?.sided} onClick={() => action(item)}>
                                    <BodyLandpageSideItemIcon />
                                    { item.title }
                                </BodyLandpageSideItem>
                            )
                        }
                    </BodyLandpageSide>
                    <BodyLandpageBody>
                        { children }
                    </BodyLandpageBody>
                </BodyLandpage>
            </ContentSided> 
        </ThemedComponent>
    );
}