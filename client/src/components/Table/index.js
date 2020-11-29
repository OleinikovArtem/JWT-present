import React from 'react'
import PropTypes from 'prop-types'
import MaterialTable from 'material-table'

const TableUsers = ({ users }) => {
  if (!users) return null
  return (
    <MaterialTable
      columns={[
        { title: 'name', field: 'name' },
        { title: 'surname', field: 'surname' },
        { title: 'email', field: 'email' },
        { title: 'phone', field: 'phone' },
        { title: 'address', field: 'address' },
      ]}
      data={users}
      title="Users"
      actions={[]}
    />
  )
}

TableUsers.prototype = {
  users: PropTypes.arrayOf(PropTypes.object),
}

export default TableUsers
