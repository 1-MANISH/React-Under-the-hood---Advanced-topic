import React from 'react'
import { useLoaderData } from 'react-router'
import { useOutletContext } from 'react-router'

function Image() {

  const githubData = useOutletContext();
  
  return (
     <div>
        <img 
          src={githubData?.avatar_url}
          alt={githubData?.name}
        />

     </div>
  )
}

export default Image