class TokenHolder {
  set tokens({ accessToken, refreshToken }) {
    if (accessToken) localStorage.setItem('accessToken', accessToken)
    if (refreshToken) localStorage.setItem('refreshToken', refreshToken)
  }

  get tokens() {
    return {
      accessToken: localStorage.getItem('accessToken'),
      refreshToken: localStorage.getItem('refreshToken'),
    }
  }

  removeTokens() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }
}

const tokenHolder = new TokenHolder()

export default tokenHolder
