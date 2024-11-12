import { GET, PUT } from './api'

export const Read = async () => {
    return await GET(`/about`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/about/${id}`, params, true);
}
