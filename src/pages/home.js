// IMPORTS //
import React from "react"
import Footer from "../components/footer"
import Locations from "../components/locations"
import Header from "../components/header"
import home from "../assets/img/home.png"
import "../style/home.css"

// HOME PAGE // 
const Home = () => {
    return (
        <div>
            <div className="content">
                <Header />
                <div className="banner">
                    <div className="home_background">
                        <h1>Chez vous, partout et ailleurs</h1>
                        <img src={home} alt="Paysage de rochers avec des arbres à côté de la mer" />
                    </div>
                </div> 
                <Locations />
            </div>
            <Footer />
        </div>
    )
}

export default Home