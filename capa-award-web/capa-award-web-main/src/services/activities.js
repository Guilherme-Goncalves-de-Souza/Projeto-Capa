import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/activities`, params, true);
}

export const Read = async () => {
    return await GET(`/activities`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/activities/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/activities/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/activities/${ id }`, true);
}