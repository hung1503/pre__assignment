import React from "react";
import { Link } from "react-router-dom";
function Card({data}) {
    return (
        <div className="container">
            <div className="row">
                {data.map((perData) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={perData.id}>
                        <div className="our-team" id="container">
                            <div className="picture" id="name">
                                <img alt="profile-pic"></img>
                            </div>
                            <div className="team-content">
                                <h3 className="name">{perData.name}</h3>
                                <i>@{perData.username}</i>
                                <p className="title">{perData.website}</p>
                                <Link className="button button--flex" to={`/cards/${perData.id}`}>More Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card;