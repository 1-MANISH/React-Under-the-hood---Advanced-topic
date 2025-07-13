import React, { Component } from 'react'
import withCounter from './withCounter'

 class Counter extends Component {

        

        componentDidMount(){
                // const btn = document.getElementById('btn')
                // btn.addEventListener(this.props.method,this.incrementCount)
        }
        render() {

                const {greet,count,incrementCount ,name,method} = this.props
                return (
                        <div>
                        <h4>{name} {count} times</h4>
                        <button 
                               {...{[method]:incrementCount}}
                        >
                                Click Me
                        </button>
                        <p>{greet}</p>
                </div>
                )
        }
}

export default withCounter(Counter)