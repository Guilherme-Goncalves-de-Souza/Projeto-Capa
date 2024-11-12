import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/chats`, params, true);
}

export const Read = async (id) => {
    return await GET(`/chats?article=${ id }`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/chats/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/chats/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/chats/${ id }`, true);
}