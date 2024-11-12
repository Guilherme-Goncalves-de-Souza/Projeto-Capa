import React, { useState } from "react";   

export default function useSearchExpression(){  
    const [searchExpression, setSearchExpression] = useState("")
 
    const filterSearchExpression = item => {
        return ( !searchExpression || Object.keys(item).filter(k => `${ item[k] }`.toLowerCase().indexOf( searchExpression.toLowerCase()) !== -1 ).length > 0)
    }

    return {
        searchExpression, setSearchExpression, filterSearchExpression
    };
}