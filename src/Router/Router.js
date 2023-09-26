import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Projects } from "../pages/projects/projects"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;