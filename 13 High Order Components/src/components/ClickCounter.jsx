import React, { Component } from 'react'
import withCounter from './withCounter'

 class ClickCounter extends Component {

        constructor(props){
                super(props)
                this.state = {
                        count:0
                }
        }

        incrementCount = () => {
                this.setState((prevState)=>({...prevState,count:prevState.count+1}))
        }
        render() {
                const {name,greet} = this.props
        return (
                <div>
                        <h4>{name} {this.state.count} times</h4>
                        <button onClick={this.incrementCount}>Click Me</button>
                        <p>{greet}</p>
                </div>
        )
        }
}

export default withCounter(ClickCounter)