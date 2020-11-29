import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsersActions } from '../../actions/userActions'
import TableUsers from '../../components/Table'
import { useHistory } from 'react-router-dom'
import { pagesUrls } from '../../routers'

const UsersTable = ({ users, user, getUsers }) => {
  const history = useHistory()

  useEffect(() => {
    if (user) {
      getUsers()
    } else {
      history.push(pagesUrls.home)
    }
  }, [user, history, getUsers])

  return <TableUsers users={users} />
}


const mapStateToProps = ({ users: { users }, auth: { user } }) => ({
  users,
  user,
})

export default connect(mapStateToProps, { getUsers: getUsersActions })(
  UsersTable
)
