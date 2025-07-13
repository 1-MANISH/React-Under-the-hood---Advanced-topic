import React from "react"


class Counter2 extends React.Component{

        componentDidMount(){
                console.log("Counter2 : component did mount")
        }

        componentDidUpdate(prevProps,prevState){
                console.log(prevProps.count,this.props.count)
                console.log("Counter2 : component did updated")
        }

        componentWillUnmount(){
                console.log("Counter2 : component will unmount")
        }
        render(){
                return (
                        <div>
                                {this.props.count}
                        </div>
                )
        }
}

export default Counter2