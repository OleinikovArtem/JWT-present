import Login from '../view/Login'
import UsersTable from '../view/UsersTable'
import Home from '../view/Home'

export const pagesUrls = {
  login: '/login',
  home: '/',
  users: '/users',
}

export const defaultRoutes = [
  {
    key: 'login',
    path: pagesUrls.login,
    exact: true,
    component: Login,
  },
  {
    key: 'form',
    path: pagesUrls.home,
    exact: true,
    component: Home,
  },
]

export const adminRoutes = [
  {
    key: 'users-list',
    path: pagesUrls.users,
    exact: true,
    component: UsersTable,
  },
]
