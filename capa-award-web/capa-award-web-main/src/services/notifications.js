import { GET, POST, PUT, DELETE } from "./api";

export const ReadNotifications = async () => {
    return await GET(`/v1/notifications`, true);
}

export const SaveDeviceToken = async (params) => {
    return await POST(`/v1/notifications/token`, params, true);
}

export const UpdateNotification = async (params, id) => {
    return await PUT(`/v1/notifications/${id}`, params, true);
}

export const RemoveNotification = async (id) => {
    return await DELETE(`/v1/notifications/${id}`, true);
}

export const RemoveAllNotifications = async () => {
    return await DELETE(`/v1/notifications-all`, true);
}