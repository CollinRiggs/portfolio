import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Projects = () => {
    const [data, setData] = useState({ projects: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                "https://cdn.devbread.net/projects",
                {
                    crossDomain: true,
                }
            );
            setData(result.data);
        };

        fetchData();
    }, []);

    return (
        <div className="projects" id="projects">
            <h1 className="section-header">Projects</h1>
            <div className="project-list">
                {data.projects.map((project) => (
                    <div key={project.id}>
                        <Link to={`projects/${project.id}`}>
                            <div className="project">
                                <p className="project-title">{project.title}</p>
                                <div className="project-icon-box">
                                    <img
                                        className="project-icon"
                                        src={project.iconUrl}
                                        alt={project.title}
                                    />
                                </div>
                                <p className="project-tag">{project.tagline}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
