import React from "react";
import Card from "./Card"

function Hero({data}){
    return (
        <section className="container">
            <div className="row">
                    <Card data={data} />
            </div>
        </section>
    )
}   

export default Hero;