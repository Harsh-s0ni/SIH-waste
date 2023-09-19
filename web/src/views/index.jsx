import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Intro from "../components/Intro";

const Views = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Intro />}>
                {/* <Route path="" element={<Navigate to='navbars' replace />} /> */}
                {/* <Route path='*' element={<Navigate to='navbars' replace />} /> */}
            </Route>
        </Routes>
    </BrowserRouter>
}

export default Views;