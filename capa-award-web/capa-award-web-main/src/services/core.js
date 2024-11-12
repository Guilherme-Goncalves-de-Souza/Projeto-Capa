import { GET, POST, PUT, DELETE } from './api'

export const Create = async (table, params) => {
    return await POST(`/${ table }`, params, true);
}

export const Read = async (table) => {
    return await GET(`/${ table }`, true);
}

export const ReadOne = async (table, id) => {
    return await GET(`/${ table }/${id}`, true);
}

export const Update = async (table, params, id) => {
    return await PUT(`/${ table }/${id}`, params, true);
}

export const Delete = async (table, id) => {
    return await DELETE(`/${ table }/${ id }`, true);
}



export const SentEmail = async (params) => {
    return await POST(`/email`, params, true);
}