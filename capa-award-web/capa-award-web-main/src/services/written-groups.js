import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/written-groups`, params, true);
}

export const Read = async () => {
    return await GET(`/written-groups`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/written-groups/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/written-groups/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/written-groups/${ id }`, true);
}