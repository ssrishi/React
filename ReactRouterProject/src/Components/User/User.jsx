import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center text-xl font-semibold p-4 bg-slate-400'>User : {userid}</div>
  )
}

export default User