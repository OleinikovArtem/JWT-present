import axios from 'axios'

import tokenHolder from '../helpers/TokenHolder'
import { isExpiredToken } from '../helpers/jwt'
import { redirectNativeToLogin } from '../helpers/nativeRedirect'
import { handleError } from '../helpers/handleError'

export const baseURL = `${process.env.SERVER_URL || 'http://localhost:3003'}/api`

export const publicInstance = axios.create({ baseURL })

export const privateInstance = axios.create({ baseURL })

const getAndUpdateTokens = async () => {
  const { refreshToken: oldRefreshToken } = tokenHolder.tokens
  try {
    const {
      data: { accessToken, refreshToken }
    } = await auth.refreshToken({ data: { refreshToken: oldRefreshToken } })

    tokenHolder.tokens = { accessToken, refreshToken }
    return { accessToken, refreshToken }
  } catch (e) {
    tokenHolder.removeTokens()
  }
}

privateInstance.interceptors.request.use(async config => {
  const { accessToken } = tokenHolder.tokens

  if (!accessToken) return redirectNativeToLogin()

  if (isExpiredToken(accessToken)) {
    try {
      await getAndUpdateTokens()
    } catch (e) {
      return redirectNativeToLogin()
    }
  }

  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${tokenHolder.tokens.accessToken}`
  }

  return config
})

privateInstance.interceptors.response.use(response => response,
  reject => {
    if (reject.response && reject.response.status === 401) {
      tokenHolder.removeTokens()

      return redirectNativeToLogin()
    }

    handleError(reject)

    return reject.response?.data || reject.response
  }
)

const publicRequest = (method, url) => (...params) =>
  publicInstance[method](url, ...params)

const privateRequest = (method, url) => (...params) =>
  privateInstance[method](url, ...params)

export const auth = {
  login: publicRequest('post', '/auth/login'),
  signUp: publicRequest('post', '/auth/sign-ip'),
  refreshToken: publicRequest('get', '/auth/refresh-token'),
}

export const user = {
  create: privateRequest('post', '/user'),
  getAll: privateRequest('get', '/users'),
  verifyUser: privateRequest('get', 'verify0client')
}
