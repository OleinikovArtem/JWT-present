import jwtDecode from 'jwt-decode';

export const isExpiredToken = token => {
  const decode = jwtDecode(token);
  const diffTime = decode.exp * 1000 - Date.now()
  const diffMinutes = diffTime / 1000 / 60

  return diffMinutes < 2;
};
