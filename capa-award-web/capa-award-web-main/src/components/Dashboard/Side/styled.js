import styled from 'styled-components'   
  

export const DashboardMenuContainer = styled.div.attrs({ 
})`           
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
    background: ${ props => props.theme.palette.colors.shadow };
`;

export const DashboardMenu = styled.div.attrs({ 
    className:'menu-contant'
})`           
    max-width: 389px;
    background: ${ props => props.theme.palette.colors.white };
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const DashboardMenuHeader = styled.div.attrs({ 
})`           
    height: 60px;
    width: 100%; 
    display: flex;
    align-items: center;
    padding: 0 20px;

    text-transform: uppercase;
    font-size: 15px;
    color: ${ props => props.theme.palette.colors.white };
    cursor: pointer;

    background: ${ props => props.theme.palette.primary.main };
    background: linear-gradient(48deg, rgba(${props => props.theme.palette.primary.main},1) 0%, rgba(${props => props.theme.palette.primary.main},.9) 21%, rgba(${props => props.theme.palette.primary.main},.75) 49%, rgba(${props => props.theme.palette.primary.main},.6) 87%, rgba(${props => props.theme.palette.primary.main},.45) 100%);
`;

export const DashboardMenuHeaderIcon = styled.img.attrs({ 
})`           
    margin-right: 20px;
    cursor: pointer;
`;

export const DashboardMenuHeaderUserContent = styled.div.attrs({ 
})`           
    padding: 27px 25px;
    margin-bottom: 28px;
    background: ${ props => props.theme.palette.primary.main } ;
`;

export const DashboardMenuHeaderUserImage = styled.div.attrs({ 
})`           
    width: 160px;
    height: 160px; 
    border-radius: 80px; 
    background: ${ props => props.theme.palette.colors.grey } url(/logo1024.png) no-repeat center center / cover;
    margin: 0 auto 12px;
    overflow: hidden;
`;

export const DashboardMenuHeaderUserText = styled.div.attrs({ 
})`           
    font-size: 15px;
    font-weight: bold;
    color: ${ props => props.theme.palette.colors.grey };
    margin-bottom: 12px; 
`;

export const DashboardMenuOption = styled.div.attrs({ 
})`           
    padding: 20px 30px;
    font-size: 15px;
    color: ${ props => props.theme.palette.colors.grey };
    cursor: pointer; 

    &:hover{
        text-decoration: underline;
    }
    
    ${
        props => props.active ? `
            background: ${ props.theme.palette.primary.main };
            font-size: 15px;
            font-weight: bold;
            color: ${ props.theme.palette.colors.white };
        ` : ``
    }
`;

export const DashboardMenuContent = styled.div.attrs({ 
})` 
    flex:1;
`;

export const DashboardMenuFooter = styled.div.attrs({ 
})`
    padding: 20px;
`;

export const DashboardVersionContent = styled.div.attrs({ 
})` 
    margin: 24px 0;
`;

export const DashboardVersionText = styled.div.attrs({ 
})`
    font-size: 15px;
    font-weight: bold;
    color: ${ props => props.theme.palette.colors.grey };
    text-align: center; 
`;
