import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime";

let anotherUser = "React Ka Baap"


function MyApp(){

    return (
    <h1 className='headingOfMyApp mainHeading'>
      Our Custom MY App Component
      </h1>
    )
    // return React.createElement(
    //   "h1",
    //   {className:"headingOfMyApp mainHeading"},
    //   "Our Custom MY App Component"
    // )

  
}

let reactElement = React.createElement(
  "h1",
    {className:"headingOfMyApp mainHeading"},
    `Our Custom MY App Component `,
    anotherUser
)

// // console.log(reactElement);
// const anotherElement = (
//   <a href="https://google.com"  target='_blank' >Visit Google</a>
// )

createRoot(document.getElementById('root')).render(
        <App />         
)

/*

createRoot(document.getElementById('root')).render(
reactElement
)
createRoot(document.getElementById('root')).render(
    MyApp()
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)

*/
