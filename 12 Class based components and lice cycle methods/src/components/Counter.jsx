import { useEffect } from "react"


function Counter({count}) {

         useEffect(()=>{
               console.log("Counter : component did updated + mount first time")
       },[count])

       useEffect(()=>{
               console.log("Counter : component did mount")
               return () => {
                       console.log("Counter: component will unmount")
               }
       },[])
        return (
                <div>
                        Count : {count}
                </div>
        )
}

export default Counter