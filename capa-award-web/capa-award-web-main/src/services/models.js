import { GET, PUT } from './api'

export const Read = async () => {
    return await GET(`/docs`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/docs/${id}`, params, true);
}
