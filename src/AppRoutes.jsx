import { Routes, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import App from "./App"

const AppRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    )
}

export default AppRoutes