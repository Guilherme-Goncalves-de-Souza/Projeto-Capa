import React, { useState, createContext, useEffect } from 'react';
import { ReadObject, SaveObject } from '../services/storage';

export const CoreContext = createContext({});

export const CoreState = ({ children }) => {
    const [user, setUser] = useState(ReadObject('user') || {});
    const [modal, setModal] = useState(null);
    const contextValue = {
        user, setUser,
        modal, setModal
    };

    // para persistir o estado quando o app recarregar
    useEffect(() => {
        const storedUser = ReadObject('user');
        if (storedUser) {
            setUser(storedUser.user);
        }
    }, []);

    // para salvar o estado do usuário sempre que ele mudar
    useEffect(() => {
        SaveObject('user', user);
    }, [user]);

    return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>;
};