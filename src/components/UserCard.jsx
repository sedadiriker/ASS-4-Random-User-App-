import React, { useEffect, useState } from 'react'
import { getUser } from '../services/api'

const UserCard = () => {
    const [user, setuser] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            const data = await getUser()
            setuser(data)
        }
        fetchData()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default UserCard
