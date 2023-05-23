import React from "react";
import { IconContext } from "react-icons/lib";
import {
    TiSocialGithubCircular,
    TiSocialLinkedinCircular,
    TiSocialAtCircular,
} from "react-icons/ti";

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="name">Collin Riggs</div>
            <div className="title">Full-Stack Developer</div>
            <div className="profile-pic">
                <img
                    src="http://cdn.devbread.net/static/profile_picture.jpg"
                    alt="Headshot"
                ></img>
            </div>
            <div className="bio">Full-stack programmer specializing in video game A.I. and back-end server systems.</div>
            <div className="bio">B.Sc. (Hons) from Memorial University of Newfoundland.</div>
            <div className="social-links">
                <IconContext.Provider value={{ color: "black", size: "46px", className: "social-link-ico" }}>
                    <a href="https://github.com/CollinRiggs" target="_blank" rel="noopener noreferrer"><TiSocialGithubCircular /></a>
                    <a href="https://www.linkedin.com/in/collinriggs/" target="_blank" rel="noopener noreferrer"><TiSocialLinkedinCircular /></a>
                    <a href="mailto: mail@collinriggs.com" target="_blank" rel="noopener noreferrer"><TiSocialAtCircular /></a>
                </IconContext.Provider>
            </div>
        </div>
    );
};
export default Home;
