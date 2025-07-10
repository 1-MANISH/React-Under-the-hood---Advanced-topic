import UserContextProvider from "./context/UserContextProvider"
import {Login,Profile} from "./components"

function App() {
        return (
                <UserContextProvider>
                        <h1>useContext + provider</h1>
                        <Login />
                        <Profile />
                </UserContextProvider>
        )
}
export default App