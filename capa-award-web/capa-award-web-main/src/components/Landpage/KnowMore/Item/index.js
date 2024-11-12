import React from "react"; 

import {
    KnowItem,
    KnowItemImage,
    KnowItemContent,

    KnowItemContentTitle,
    KnowItemContentText,
    KnowItemContentRate,
    KnowItemContentRateText,
    KnowItemContentRateIcon,
    KnowItemContentDescription,
    KnowItemContentAvailable
} from './styled'

export default function KnowMoreItem(props){ 
 
    return ( 
        <> 
            <KnowItem>
                <KnowItemImage image={ props.image } />
                <KnowItemContent>
                    <KnowItemContentTitle>{ props.title }</KnowItemContentTitle>
                    <KnowItemContentText>{ props.subtitle }</KnowItemContentText>
                    <KnowItemContentRate>
                        {
                            [1,2,3,4,5].map((item, key) => 
                                <KnowItemContentRateIcon key={key} rated={item <= props.rate} />
                            )
                        }
                        <KnowItemContentRateText>{ props.avaliations } Avaliations</KnowItemContentRateText>
                    </KnowItemContentRate>
                    <KnowItemContentDescription>{ props.description }</KnowItemContentDescription>
                    <KnowItemContentAvailable>Since: { props.available }</KnowItemContentAvailable>
                </KnowItemContent>
            </KnowItem> 
        </>
    );
}