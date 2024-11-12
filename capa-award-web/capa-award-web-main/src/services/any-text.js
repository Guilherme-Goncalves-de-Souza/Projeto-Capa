import { GET, POST, PUT, DELETE } from './api'

export const ReadFile = async (params) => {
    return await POST(`/v1/any-reader`, params, true);
}