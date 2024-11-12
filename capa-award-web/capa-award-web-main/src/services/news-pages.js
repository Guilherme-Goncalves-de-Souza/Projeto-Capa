import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/news-pages`, params, true);
}

export const Read = async (query = "") => {
    return await GET(`/news-pages${query}`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/news-pages/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/news-pages/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/news-pages/${ id }`, true);
}