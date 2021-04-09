import React from "react";

function Variables() {
    const button1text = 'clickMe';
    const button2text = () => {
        return 'click on me';
    }
    const button3text = ['Hi', 'there', 10];
    const button4text = {text: 'lala'};
    return (
        <div>
            <h2>hi there</h2>

            <button className="ddd" style={{ backgroundColor: 'blue', color: 'white'}}>
                {button1text}
            </button>
            <button>
                {button2text()}
            </button>
            <button>
                {button3text}
            </button>
            <button>
                {button4text.text}
            </button>
        </div>
    );
}

export default Variables;
