import React, { useEffect } from 'react'

function AppChild(props) {

        let counter = props.counter

        return (
                <div className='appChildContainer'>
                        <p>Counter Value in app Child : {counter}</p>
                </div>
        )
}

export default AppChild