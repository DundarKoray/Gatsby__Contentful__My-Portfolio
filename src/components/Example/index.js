import React from 'react'
import './styles.css'

const Example = ({ label, isButton, users }) => (
  <>
    <h1 className="example-title">{label}</h1>
    {isButton && <button type="submit">Click ME!</button>}
    {users.map(user => (
      <div>
        {user.firstName}
        {user.lastName}
        {user.age}
      </div>
    ))}
  </>
)
Example.defaultProps = {
  isButton: false,
  users: [],
}

export default Example
