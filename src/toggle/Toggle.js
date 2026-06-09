import { useContext } from "react";
import { ThemeContext } from "../context";
import "./toggle.css";

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };

    return (
        <div
            className={`t ${theme.state.darkMode ? "dark" : ""}`}
            onClick={handleClick}
        >
            <span className="t-icon">☀️</span>
            <div className={`t-button ${theme.state.darkMode ? "move" : ""}`} />
            <span className="t-icon">🌙</span>
        </div>
    );
};

export default Toggle;