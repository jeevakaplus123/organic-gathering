import { backendBaseUrl, checkStatusAndGetJSON, wpJsonBaseUrl } from "../utils/config"
// Helpers
const get = (path, token = false) => {
    const url = backendBaseUrl + path
    const headers = { Authorization: "Bearer I6NFHVSC7T43DVZOZCG4" }
    return fetch(url,{
        method: 'GET'
        // headers: {
        //   'Authorization': "Bearer I6NFHVSC7T43DVZOZCG4"
        // }
      }).then(checkStatusAndGetJSON)
}
const getContent = (path) => {
    const url = wpJsonBaseUrl + path
    
    return fetch(url).then(checkStatusAndGetJSON)
}

export const getWorkshopList = (token) => get(`/organizations/242387259401/events?token=I6NFHVSC7T43DVZOZCG4&order_by=start_asc&status=live,started`, token)
export const getToolkitContentById = (slug) => getContent(`/?slug=${slug}`)
