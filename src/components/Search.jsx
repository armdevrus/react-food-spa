import { useState } from "react";

function Search({ callback = Function.prototype }) {
    const [value, setValue] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        callback(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="btn"
                    style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                    }}
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export { Search };
