import { backendBaseUrl, checkStatusAndGetJSON } from "../utils/config"
// Helpers
const get = (path, token = false) => {
    const url = backendBaseUrl + path
    console.log(url);
    
    return fetch(url).then(checkStatusAndGetJSON)
}

export const getWorkshopList = (token) => get(`/users/me/owned_events?token=${token}`)