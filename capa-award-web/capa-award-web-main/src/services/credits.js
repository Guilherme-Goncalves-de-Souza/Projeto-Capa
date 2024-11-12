import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/credits`, params, true);
}

export const Read = async () => {
    return await GET(`/credits`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/credits/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/credits/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/credits/${ id }`, true);
}