import Card from "./components/Card";

function App() {
        return (
        <div className="flex justify-center items-center h-screen text-blue-50 gap-8">
                 <Card 
                        image={"https://images.pexels.com/photos/32762625/pexels-photo-32762625/free-photo-of-urban-surfing-scene-in-canary-islands-with-surfer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        title={"Something-1"}
                        _id={"something-1"}
                        price={600}

                 />
                  <Card 
                        image={"https://images.pexels.com/photos/32762601/pexels-photo-32762601/free-photo-of-home-grown-surf-shop-in-fuerteventura.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}
                        title={"Something-2"}
                        _id={"something-2"}
                        price={500}

                 />
        </div>
        );
}

export default App;
