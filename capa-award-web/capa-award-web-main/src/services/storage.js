import * as CryptoJS from "crypto-js";

export const storageKey = 'CapaAwards'

export const SaveObject = (key, value) => {
    return SaveStorage(key, JSON.stringify(value))
}

export const ReadObject = (key) => {
    return JSON.parse( ReadStorage(key))
} 

const Crypt = (value) => {
    return CryptoJS.AES.encrypt(value, storageKey).toString()
}

const Decrypt = (cvalue) => { 
    const bytes  = CryptoJS.AES.decrypt(cvalue, storageKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

export const SaveStorage = (key, value) => {
    const cvalue = Crypt(value)
    try {
        return localStorage.setItem(`${ storageKey }::${ key }`, cvalue);
    } catch (e) {
        return sessionStorage.setItem(`${ storageKey }::${ key }`, cvalue);
    }
} 

export const ReadStorage = (key) => {
    let cvalue = ``
    try {
        cvalue = localStorage.getItem(`${ storageKey }::${ key }`); 
    } catch (e) {
        cvalue = sessionStorage.getItem(`${ storageKey }::${ key }`);
    }  
    if( cvalue !== '' && cvalue !== null ){
        return Decrypt(cvalue);
    }
    return false
}