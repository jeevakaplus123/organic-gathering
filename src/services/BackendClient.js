import { backendBaseUrl, checkStatusAndGetJSON, wpJsonBaseUrl } from "../utils/config"
import apiFetch from '@wordpress/api-fetch';
// Helpers
const get = (path, token = false) => {
    const url = backendBaseUrl + path
    
    return fetch(url).then(checkStatusAndGetJSON)
}
const getContent = (path) => {
    const url = wpJsonBaseUrl + path
    
    return fetch(url).then(checkStatusAndGetJSON)
}

export const getWorkshopList = (token) => get(`/users/me/owned_events?token=${token}&order_by=start_asc&status=live,started`)
export const getToolkitContentById = (slug) => getContent(`/?slug=${slug}`)
