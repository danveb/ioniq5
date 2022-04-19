import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home"; 
import Finder from "./pages/Finder"; 

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/finder" element={<Finder />} />
                </Routes>
            </Router>
        </>
    )
}

export default App