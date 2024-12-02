import React, { useState, useEffect } from "react";

const Terminal = ({ text = "", style = {}, typeSpeed = 150, onClick }) => {
  const [displayedText, setDisplayedText] = useState(""); // Texto mostrado actualmente
  const [index, setIndex] = useState(0); // Índice del texto que se escribe
  const [showCursor, setShowCursor] = useState(true); // Estado para el cursor parpadeante

  // Efecto de escritura
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, typeSpeed]);

  // Efecto para el cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 300); // Parpadea cada 500ms
    return () => clearInterval(cursorInterval);
  }, []);

  if (displayedText === "" && index === 0) {
    return null;
  }

  return (
    <div
      onClick={onClick}
      style={{
        height: "100%",
        width: "100%",
        color: "#00ff00",
        fontFamily: "'Courier New', Courier, monospace",
        padding: "0 -15px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        columnGap: "3px",
        justifyContent: "center",
        alignItems: "flex-start",
        ...style, // Permite estilos personalizados
      }}
    >
      <p style={{ marginLeft: "20px" }}>
        {displayedText}
        <span style={{ opacity: showCursor ? 1 : 0 }}></span>
      </p>
    </div>
  );
};

export default Terminal;
