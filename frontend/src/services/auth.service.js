import { sendRequest } from "./api";

export const loginUser = ({ email, password }) => {
    return sendRequest({
        url: '/auth/login/',
        method: 'POST',
        data: {
            email, password
        }
    });
}

export const registerUser = ({ username, email, password }) => {
    return sendRequest({
        url: '/auth/register/',
        method: 'POST',
        data: {
            username, email, password
        }
    });
}