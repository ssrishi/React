import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ssrishi')
    //     .then(respone => respone.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // })
  return (
    <div className=' flex flex-col items-center text-center m-4 p-4 bg-gray-600 text-white'>Github Followers: {data.followers}
    <img className = 'h-80 w-80   ' src = {data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubLoader = async () => {
        const response = await fetch('https://api.github.com/users/ssrishi')
        return response.json()
}