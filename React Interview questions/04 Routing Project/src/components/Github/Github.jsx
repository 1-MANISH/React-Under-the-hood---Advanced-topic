import { useEffect, useState } from "react"
import { NavLink, Outlet, useLoaderData } from "react-router"


function Github() {

        // const [data,setData]  =useState({})

        // useEffect(()=>{
        //         fetch(`https://api.github.com/users/1-MANISH`)
        //                 .then((res) => res.json())
        //                 .then((data) => setData(data))
        //                 .catch((err) => console.log(err))
        // },[])


        const loaderData = useLoaderData();
    
        return (
                <div className=' m-4 mb-4  p-4 text-3xl h-235'>

                        <NavLink
                                to="/github/followers"
                                className="border-2 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                                Follower
                        </NavLink>

                        <NavLink
                                to="/github/image"
                                className="border-2 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                                Image
                        </NavLink>

                        <p className="my-8 text-2xl">See Below</p>
                        
                        {/* <Outlet context={data} /> */}
                        <Outlet context={loaderData} />
                
                </div>
        )
}

export default Github

export async function gitHubInfoLoader(){
        const res = await fetch(`https://api.github.com/users/1-MANISH`)
        const data = await res.json()
        return data
}