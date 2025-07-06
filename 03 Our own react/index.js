

/*
        I)
        In our react when we write 
        function(){
                return (
                        <a href="https://google.com" target="_blank">
                                <span id="mainText">Google</span>
                                <span id="subText">Search</span>
                        </a>
                )        
        }
        
        If we don't want to write js then we have to create React Element
        like -
        React.createElement(type,props,...children)
        const reactElement = React.createElement(
                "a",
                {
                        href:"https://google.com",
                        target:"_blank"
                },
                React.createElement(
                        "span",
                        {id:"mainText"},
                        "Google"
                ),
                React.createElement(
                        "span",
                        {id:"subText"},
                        "Search"
                )
        )

        This react element is called React Element
        this function return us a Object => reactElement
        reactElement ={
                type:"a",
                props:{
                        href:"https://google.com",
                        target:"_blank",
                        children:[
                                {
                                        type:"span",
                                        props:{id:"mainText",children:"Google"},
                                        key:null,
                                        ref:null
                                },{
                                        type:"span",
                                        props:{id:"subText",children:"Search"},
                                        key:null,
                                        ref:null
                                }
                        ]
                },
                key:null,
                ref:null
        }

        II) Now react render this react element on DOM
                ReactDom.render(reactElement,mainContainer)

                It created its own VDOM and render it on root element
                also make connection with VDOM and real DOM
*/


const mainContainer = document.getElementById("root")

// helper function - to create dom element--recursively
function createDomElement(type,props){
        const domElement = document.createElement(type)
        
        // adding attributes

        for(let prop in props){
                if(prop==="children")
                        continue
                
                if(prop==="className"){
                        domElement.setAttribute("class",props[prop])
                }
                else if(prop.startsWith("on")){
                        const eventType = prop.slice(2).toLowerCase();
                        domElement.addEventListener(eventType,props[prop])
                }else{
                        domElement.setAttribute(prop,props[prop])
                }
        }
        
        // recursive call for children
        if(Array.isArray(props.children) ){
                props.children?.forEach(child => {
                        const childDomElement = createDomElement(child.type,child.props)
                        domElement.appendChild(childDomElement)
                })
        }else{
                domElement.innerHTML = props.children
        }
        return domElement
}

// Function which render our react element on DOM
function customRender(reactElement,mainContainer){
       
        // create dom element - create dom element with adding innerHTML(children) , add attributes
        const domElement = createDomElement(reactElement.type,reactElement.props)
       
        // append dom element on mainContainer
        mainContainer.appendChild(domElement)
       
}

const reactElement = {
        type:"a",
        props:{
                href:"https://google.com",
                target:"_blank",
                children:[
                        {
                                type:"span",
                                props:{id:"mainText",children:"Google"},
                                key:null,
                                ref:null
                        },{
                                type:"span",
                                props:{id:"subText",children:"Search"},
                                key:null,
                                ref:null
                        }
                ]
        },
        key:null,
        ref:null
}

const reactElement2 = {
        type:"div",
        props:{
                className:"cardContainer",
                children:[
                        {
                                type:"div",
                                props:{
                                        className:"card",
                                        children:[
                                                {
                                                        type:"h2",
                                                        props:{children:"DeepIntoDev"},
                                                        key:null,
                                                        ref:null
                                                },
                                                {
                                                        type:"p",
                                                        props:{children:"Welcome to React"},
                                                        key:null,
                                                        ref:null
                                                }
                                        ]
                                },
                                
                        },
                        {
                                type:"div",
                                props:{
                                        className:"card",
                                        children:[
                                                {
                                                        type:"h2",
                                                        props:{children:"DeepIntoDev"},
                                                        key:null,
                                                        ref:null
                                                },
                                                {
                                                        type:"p",
                                                        props:{children:"Welcome to React"},
                                                        key:null,
                                                        ref:null
                                                }
                                        ]

                                },
                                
                        },
                        {
                                type:"button",
                                props:{
                                        className:"btn",
                                        onClick:()=>alert("button clicked"),
                                        children:"Click me"
                                },
                                ref:null,
                                key:null
                        }
                      
                ]
        },
        key:null,
        ref:null
}


// here we directly passing reactElement in render
// but in actual react render method it does using babel
// before our page load in browser

customRender(reactElement,mainContainer)
customRender(reactElement2,mainContainer)