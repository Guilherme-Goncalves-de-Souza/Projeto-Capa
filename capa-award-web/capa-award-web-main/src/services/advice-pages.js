import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/advice-pages`, params, true);
}

export const Read = async () => {
    return await GET(`/advice-pages`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/advice-pages/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/advice-pages/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/advice-pages/${ id }`, true);
}