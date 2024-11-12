import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/edicts`, params, true);
}

export const ReadById = async (id) => {
    return await GET(`/edicts?user=${id}`, true);
}

export const Read = async () => {
    return await GET(`/edicts`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/edicts/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/edicts/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/edicts/${ id }`, true);
}