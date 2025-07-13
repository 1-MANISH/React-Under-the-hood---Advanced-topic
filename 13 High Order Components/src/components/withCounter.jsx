import React from "react"
const withCounter = (WrappedComponent) => {
       return  class NewComponent extends React.Component{

                constructor(props){
                        super(props)
                        this.state = {
                                count:props.initialValue
                        }
                }

                incrementCount = () => {
                        this.setState((prevState)=>({...prevState,count:prevState.count+1}))
                }
                render(){
                        return(
                                <div>
                                        <WrappedComponent greet={"Bonjour"} count={this.state.count} incrementCount={this.incrementCount} {...this.props}  />
                                </div>
                        )
                }
        }
}

export default withCounter