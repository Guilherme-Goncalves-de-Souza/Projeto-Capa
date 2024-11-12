import { GET } from './api'
import pluralize from 'pluralize'   

export const ReadLiveTables = async () => {

    const result = await GET(`/api-map`, false); 

    if(result?.length && result[0]?.associations){ 
        // strapi v3 founded 
        
        return result?.length ? result?.filter(fit => fit.modelName !== 'privacy-policy' && fit.modelName !== 'terms-use' )?.map(mit => ({ 
            singularName: mit.modelName, 
            uid: `api::${ mit.modelName }.${ mit.modelName }`,
            tableName: pluralize.isSingular(mit.modelName) ? pluralize(`${ mit.modelName }`) : mit.modelName
        }) ) : [] 
    }
 
    return result?.length ? result?.map(mit => ({ 
        singularName: mit.singularName,
        uid: mit.uid,
        tableName: mit.tableName
    }) ) : []
}

export const ReadLiveTablesAttributes = async (table) => {

    const reftable = pluralize.isPlural(table) ? pluralize.singular(table) : table

    const result = await GET(`/api-map?modelName=${ reftable }`, false);
 

    if(result?.length && result[0]?.associations){
        // strapi v3 founded 
 
        const parsed = result.map((item) => {
            
            let attributes = {}

            for( const key of Object.keys(item.allAttributes) ){
                const currentAttr = item.allAttributes[key]
                const currentAssoc = item?.associations?.find(fnd => fnd.alias == key ) 

                const attr = currentAttr.model || currentAttr.collection ? {
                    name: `${ key }`,
                    type: 'relation',
                    relation: currentAttr.plugin == "upload" ? (currentAssoc?.nature == 'oneToManyMorph' ? 'morphOne' : 'morphMany') : (currentAssoc?.nature == 'oneWay' ? 'oneToOne' : 'oneToMany'),
                    target: currentAttr.plugin == "upload" ? 'plugin::upload' : `api::${ key }`
                } : {
                    ...currentAttr,
                    name: `${ key }`,
                    type: currentAttr.type,
                    columnName: `${ key }`
                }  
                attributes = {
                    ...attributes,
                    [key]: attr
                }
            }
            
            const compatibilize = {
                singularName: item.modelName,
                tableName: pluralize.isSingular(item.modelName) ? pluralize(`${ item.modelName }`) : item.modelName,
                uid: `api::${ item.modelName }.${ item.modelName }`,
                attributes 
            } 

            return compatibilize

        })

        return parsed?.[0]

    }

    
    return result?.length ? 
           result?.map( item => ({ ...item, 
                name: item.uid?.indexOf('plugin::') !== - 1 ? 
                item.tableName.replace('up_','') : item.tableName
            }))?.find(fnd => fnd.name == table ) 
        : {}
} 