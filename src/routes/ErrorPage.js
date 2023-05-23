import React from "react";
import { useRouteError } from "react-router-dom";

export default () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="content error-page">
            <p>Apologies, an unexpected error occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};
