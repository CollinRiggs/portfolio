import React from "react";

const About = () => {
    return (
        <div className="about" id="about">
            <h1 className="section-header">About</h1>
            <div className="about-content">
                <img
                    className="headshot"
                    src="https://cdn.devbread.net/static/portfolio/headshot.png"
                    alt="Headshot"
                ></img>
                <p className="about-text">
                    Since the age of fourteen, I have been immersed in the world
                    of programming. I spent my childhood playing video games
                    like Minecraft, and learned a love of programming when I
                    discovered the ComputerCraft mod, which let me use Lua to
                    control my game. Wanting more creative freedom, I learned
                    Java from YouTube tutorials so I could make my own mods.
                    Within a year I released my first mod, which has since
                    amassed over six-hundred-thousand downloads. After my early
                    success with modding, I used the opportunities in
                    high-school programming classes to go above and beyond,
                    making full video-games as my course projects each year.
                    Now, I have a university degree specializing in video game
                    development and have the tools to make things I only dreamed
                    of back when I was fourteen.
                </p>
                <p className="about-text">
                    Professionally, I have taken on several contracts building
                    software for small or independent businesses. I'm
                    responsible for those text messages you receive the day
                    before your doctor's appointment reminding you to show up
                    tomorrow. I've also created interactive text games for
                    online communities to play together, and also designed
                    services for automating document creation and data
                    validation for law firms. I've never quite known how to
                    solve the problem before starting the job, but after eight
                    years of self-taught programming experience I am always
                    figure it out somehow.
                </p>
                <p className="about-text">
                    Now in my free time I build plugins for virtual table top
                    games where I play Dungeons & Dragons with friends from
                    across the world, or playing video games. When I'm not at my
                    desk, I'm either playing guitar, going on hikes, rock
                    climbing, or watching Formula 1.
                </p>
            </div>
        </div>
    );
};

export default About;
