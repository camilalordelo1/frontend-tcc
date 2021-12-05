import axios from "axios"
import createAuthRefreshInterceptor from "axios-auth-refresh"

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true
}) 

createAuthRefreshInterceptor(api, error =>
  api.get('/token').then(response => {
    if (api.defaults.headers.setCookie) {
      delete api.defaults.headers.setCookie
    }

    const { accessToken } = response.data

    const bearer = `Bearer ${accessToken}`

    api.defaults.headers.Authorization = bearer

    error.response.config.headers.Authorization = bearer

    return Promise.resolve()
  })
)

export { api }