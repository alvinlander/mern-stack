import React from "react";
import Button from "elements/Button";
import { BrowserRouter as Router } from "react-router-dom";

function IconText() {
    return (
        <Router>
            <Button
                className="brand-text-icon text-decoration-none"
                href=""
                type="link"
            >
                Stay<span className="text-indigo">cation.</span>
            </Button>
        </Router>
    );
}

export default IconText;
