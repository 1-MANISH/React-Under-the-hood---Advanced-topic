import React, { Component } from 'react'

class HoverCounter extends Component {
  
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

                const {name} = this.props
        return (
                <div>
                        <h4>{name} {this.state.count} times</h4>
                        <button onMouseOver={this.incrementCount}>Click Me</button>
                </div>
        )
        }
}

export default HoverCounter
