import React from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";

const Resume = () => {
    return (
        <div className="resume" id="resume">
            <h1 className="section-header">Resume</h1>
            <div className="resume-content">
                <a
                    href="http://cdn.devbread.net/static/portfolio/resume_collinriggs_may23.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="resume-button">
                        <p>
                            Download Resume <BsFileEarmarkPdf size={20} />
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Resume;
