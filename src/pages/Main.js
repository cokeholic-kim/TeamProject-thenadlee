import React from "react";
import FindPlace from "./FindPlace";
import MainBottom from "./MainBottom";
import MainTop from "./MainTop";
import Footer from '../components/Footer';
import Header from '../components/Header';


function Main(){

    return(
        <div>
            <Header/>
            <MainTop/>
            <MainBottom/>
            <FindPlace/>
            <Footer/>
        </div>
    )
}

export default Main