import React, { useEffect, useState } from "react"
// import Counter from "./components/Counter"
import Counter2 from "./components/Counter2"



class App extends React.Component{

        constructor(){
                super()
                this.state = {
                        count:0
                }
        }

        increment(){
                this.setState((prevCount)=>({count:prevCount.count+1}))
        }

        componentWillUnmount(){
                console.log("App :component will unmount")
        }

        render(){
                return(
                        <div 
                        style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}
                >
                        App

                        {""}

                        <button onClick={()=>this.increment(this)}>Click me</button>

                        {""}
                        <Counter2 count={this.state.count} />
                        
                </div>
                )
        }

}


// function App() {

//          const [count,setCount]  =useState(0)

//         useEffect(()=>{
//                 console.log("App :component did mount")
//                 return () => {
//                         console.log("App :component will unmount")
//                 }
//         },[])

//         const increment = () =>{
//                 setCount((prevCount)=>prevCount+1)
//         }
//         return (
//                 <div 
//                         style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}
//                 >
//                         App

//                         {""}

//                         <button onClick={()=>increment()}>Click me</button>

//                         {""}
//                         {/* <Counter count={count} /> */}
                        
//                 </div>
//         )
// }

export default App