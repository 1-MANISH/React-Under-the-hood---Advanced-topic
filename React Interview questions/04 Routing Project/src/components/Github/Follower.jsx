import React from 'react'
import { useOutletContext } from 'react-router'

function Follower() {

        const githubData = useOutletContext();

        return (
              <div>Follower : {githubData?.followers}</div>
        )
}

export default Follower