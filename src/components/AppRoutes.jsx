import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import News from "../pages/News";
import Error from "../pages/Error";
import PostPage from "./PostPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<News/>}/>
            <Route path="/about" element={<About/>}/>
            <Route exact path="/news/:id" element={<PostPage/>}/>
            <Route exact path="/news" element={<News/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRoutes;