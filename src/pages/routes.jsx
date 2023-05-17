import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Habilidades } from "./habilidades";
import { Projetos } from "./projetos";

const AppRouter = () => {

    return (

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={ <Home/> }/>

                <Route path="/habilidades" element={ <Habilidades/> }/>

                <Route path="/projetos" element={ <Projetos/> }/>

            </Routes>
        
        </BrowserRouter>

    )

}

export { AppRouter }