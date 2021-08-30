import React from "react";
import {useParams} from "react-router-dom";


function Button({data}){
    const {id} = useParams();

    return (
        <section className="container">
            <div className="row our-team">
                <ul>
                    {data
                        .filter((card) => card.id === id)
                        .map((card) => (
                            <div className="team-content" key={card.id}>
                                <li>Name: {card.name}</li>
                                <li>Email: {card.email}</li>
                                <li>Username: {card.username}</li>
                                <li>Phone: {card.phone}</li>
                                <li>Website: {card.website}</li>
                                <li>Company: {card.company.name}</li>
                                <li>Address: {card.address}
                                    <ul>
                                        <li>Street: {card.address.street}</li>
                                        <li>Suite: {card.address.suite}</li>
                                        <li>City: {card.address.city}</li>
                                        <li>Zipcode: {card.address.zipcode}</li>
                                    </ul>
                                </li>
                            </div>
                        ))
                    }    
                </ul>
            </div>
        </section>
    )
}

export default Button;