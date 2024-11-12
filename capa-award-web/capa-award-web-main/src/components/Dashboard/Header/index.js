import React, { useState } from "react";   
 
import DashboardSide from "../Side";
import { 
    DashboardHeaderContainer,
    DashboardHeaderAction,
    DashboardHeaderActionIcon
} from "./styled"; 

export default function DashboardHeader(){  
    
    const [opened, setOpened] = useState(false) 

    return ( 
        <> 
            <DashboardHeaderContainer>
                <DashboardHeaderAction onClick={() => setOpened(true)}>
                    <DashboardHeaderActionIcon src={`/icons/menu.svg`} alt="menu-icon" />
                    Menu
                </DashboardHeaderAction> 
                {/*  */}
            </DashboardHeaderContainer> 
            <DashboardSide opened={opened} setOpened={setOpened} /> 
        </>
    );
}