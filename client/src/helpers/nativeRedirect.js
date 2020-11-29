export function redirectNativeToLogin() {
  if (!window.location.pathname.includes('/login')) {
    window.location.replace('/login')
  }
}

export function redirectNativeToMain() {
  window.location.replace('/')
}
