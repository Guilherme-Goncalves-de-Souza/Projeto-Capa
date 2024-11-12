import React from "react";  
 
import { 
    CardBanner,
    CardBannerTitle,
    CardBannerText 
} from "./styled";

import Button from "components/Form/Button";

export default function CardSelect(){ 

    return ( 
        <> 
            <CardBanner>
                <CardBannerTitle>Lorem ipsum dolor sit amet, consectetur adipiscing</CardBannerTitle>
                <CardBannerText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut congue nisl. Duis lobortis ante vitae hendrerit efficitur. Quisque dolor magna, <b>efficitur et nunc id</b>, pretium porta mauris. Integer vel lobortis risus. Duis consectetur ac ante at ullamcorper. Nullam luctus sollicitudin odio, eu gravida lorem efficitur ac. Nam pulvinar consequat cursus. Maecenas convallis 
                </CardBannerText> 
                <Button secondary>
                    Lorem ipsum dolor
                </Button>
            </CardBanner> 
        </> 
    );
}