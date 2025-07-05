
function App() {
  return (
    <div className="container">
      <h1>DeepIntoDev</h1>
      <UserCard name="react" age={22} />
      <button onClick={() => alert("Button Clicked!")}>Click Me</button>
    </div>
  );
}



function UserCard({ name, age }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

function UserCard(props){
        return React.createElement(
                'div',
                {className:'card'},
                React.createElement('h2',null,props.name),
                React.createElement('p',null,`Age: ${props.age}`),
        )
}

function App(){
        return React.createElement(
                'div',
                {className:'container'},
                React.createElement('h1',null,'DeepIntoDev'),
                React.createElement(UserCard,{name:"react",age:22}),
                React.createElement(
                  'button',
                  {onClick:()=>alert("button clicked")},
                  "Click me"
                )
        )
}

// --------------

<div id="container">
  <h1>DeepIntoDev</h1>
  <p>Welcome to React</p>
</div>

// babel do this
const element = React.createElement(
  "div",
  { id: "container" },
  React.createElement("h1", null, "DeepIntoDev"),
  React.createElement("p", null, "Welcome to React")
);
console.log(element);

// return this

{
    type:"div",
    props:{
        id:"container",
        children:[
            {type:"h1",props:{children:"DeepIntoDev"},key:null,ref:null},
            {type:"p",props:{children:"Welcome to React"},key:null,ref:null}
        ]
    },
    key:null,
    ref:null
}