import axios from "axios";
import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsFileEarmarkPdf, BsLink } from "react-icons/bs";

export const loader = async ({ params }) => {
    const project = await axios.get(
        `https://cdn.devbread.net/projects/${params.projectId}`,
        {
            crossDomain: true,
        }
    );
    return { project: project.data };
};

var renderId = 0;

const renderContent = (content) => {
    if (content.type === "image") {
        return (
            <img
                className="project-img"
                src={content.data}
                alt="project"
                key={renderId++}
            />
        );
    }
    if (content.type === "text") {
        return (
            <div className="project-text" key={renderId++}>
                {content.data.split("\n").map((line) => (
                    <p>{line}</p>
                ))}
            </div>
        );
    }
    if (content.type === "video") {
        return (
            <div className="project-video" key={renderId++}>
                <iframe
                    width="630"
                    height="472"
                    src={content.data}
                    title="Youtube Video Player"
                />
            </div>
        );
    }
    if (content.type === "pdf") {
        return (
            <a
                key={renderId++}
                href={content.data}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="resume-button">
                    <p>
                        View PDF <BsFileEarmarkPdf size={20} />
                    </p>
                </div>
            </a>
        );
    }
    if (content.type === "link") {
        return (
            <a
                key={renderId++}
                href={content.data}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="link-button">
                    <p>
                        View Link <BsLink size={20} />
                    </p>
                </div>
            </a>
        );
    }
};

export default () => {
    const { project } = useLoaderData();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="content">
            <Link to="/#projects">
                <div className="project-back-arrow">
                    <BiArrowBack size={50} />
                </div>
            </Link>
            <br />
            <h1>{project.title}</h1>
            <br />
            <div className="project-content">
                {project.content.map(renderContent)}
            </div>
        </div>
    );
};
