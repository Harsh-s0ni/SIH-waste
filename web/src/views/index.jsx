import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Intro from "../components/Intro";

const Views = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Signin />}/>
            <Route path="/" element={<Intro />}>
            {/* <Route path="login" element={<Signin />} />  Add more pages just like this*/} 
                {/* <Route path="" element={<Navigate to='navbars' replace />} /> */}
                {/* <Route path='*' element={<Navigate to='navbars' replace />} /> */}
            </Route>
        </Routes>
    </BrowserRouter>
}

export default Views;