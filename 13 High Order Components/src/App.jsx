

import React, { Component } from 'react'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import Counter from './components/Counter'

export default class App extends Component {
        render() {
        return (
                <div>
                        <h1>Counter App </h1>
                        {/* <ClickCounter 
                                name="Click Counter"
                        />
                        <HoverCounter 
                                name="Hover Counter"
                        /> */}

                        <Counter
                                name="Click Counter"
                                initialValue={0}
                                method={"onClick"}
                        />
                        <Counter        
                                name="Hover Counter"
                                initialValue={10}
                                method={"onMouseOver"}
                        />
                </div>
        )
        }
}
