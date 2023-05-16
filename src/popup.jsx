import React from "react";
import { render } from "react-dom";

function Popup() {
    return(
        <div>
            <h1>Popup hey there</h1>
            <p>hey hello</p>
            <p>hello</p>
        </div>
    );
}

render(<Popup/> , document.getElementById('react-target'));