import "./button.css";

function Button({ text, type, onTouch }) {

  const btnstyle = {
    backgroundColor: type === "alert" ? "blue" : "black",
  };

  return (
    <button onClick={onTouch} style={btnstyle} className="btn">
      {text}
    </button>
  );
}

export default Button;
