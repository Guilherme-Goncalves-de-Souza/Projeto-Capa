import React, { useState, createContext, useEffect } from 'react'
import { ReadObject, SaveObject } from '../services/storage'
 
export const CoreContext = createContext({})

export const CoreState = ({ children }) => {
      
	const [ user, setUser ] = useState( ReadObject('user') ? ReadObject('user') : {})  
	const [ modal, setModal ] = useState( null )  
	const contextValue = {  
		user, setUser,
		modal, setModal
	}

	// to persist state when app reload  
    useEffect(() => { SaveObject('user', user.user) ;}, [user]) 

	return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>
}
