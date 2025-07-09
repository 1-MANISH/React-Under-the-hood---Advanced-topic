import { BrowserRouter, Route, Routes } from 'react-router'
import { Home,About,Contact,Github,Follower,Image,NotFound,User,Header,Footer} from "./components"
function App() {
        return (
                <BrowserRouter>
                      <Header />

                      <Routes>
                                <Route index path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route  path="github" element={<Github />} >
                                        <Route path="followers" element={<Follower />} />
                                        <Route path="image" element={<Image />} />
                                </Route>
                                <Route path="/user/:userId" element={<User />} />
                                <Route path="*" element={<NotFound />} />
                      </Routes>
                      <Footer />

                </BrowserRouter>
        )
}

export default App