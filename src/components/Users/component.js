import React, {useEffect, useState} from 'react'
import User from '../User/component'  

export default () => {
  const [users, setUser] = useState([]);
  async function fetchUsersData() {
    const response = await fetch("/all");
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUsersData()
  })

  return <div className="users">{users.map(user => <User key={user.name} user={user} />)}</div>
}
