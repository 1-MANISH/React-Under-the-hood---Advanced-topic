import { useEffect, useState } from "react"
import { ThemeContextProvider } from "./context/theme"
import {ThemeButton,Card} from "./components"

function App() {

        const [themeMode,setThemeMode] = useState("light")
        const toggleThemeMode = (themeMode) => {
                setThemeMode(themeMode === "light" ? "dark" : "light")
        }

        // actual change in theme

        useEffect(() => {
                document.querySelector('html').classList.remove("light","dark")
                document.querySelector('html').classList.add(themeMode)
        },[themeMode])

        return (
                <ThemeContextProvider value={{themeMode,toggleThemeMode}}>
                        <div className="flex flex-wrap min-h-screen items-center">
                                <div className="w-full">
                                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                                               <ThemeButton />
                                        </div>

                                        <div className="w-full max-w-sm mx-auto">
                                                <Card />
                                        </div>
                                </div>
                        </div>
                </ThemeContextProvider>
        )
}

export default App