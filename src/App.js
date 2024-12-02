import React, { useState, useEffect } from "react";
import Terminal from "./Terminal";

const App = () => {
  const [step, setStep] = useState(0); // Controla el flujo de renderizado
  const [section, setSection] = useState("home"); // Controla la sección activa

  useEffect(() => {
    // Temporizadores para el flujo
    const timers = [];
    timers.push(
      setTimeout(() => setStep(1), 200), // Aparece el nombre
      setTimeout(() => setStep(2), 2200), // Aparece el título
      setTimeout(() => setStep(3), 4200) // Aparecen las opciones de navegación
    );

    return () => timers.forEach(clearTimeout); // Limpieza de temporizadores
  }, []);

  return (
    <div className="app">
      <div className="container">
        {/* Contenedor Izquierdo */}
        <div className="left-column">
          {/* Nombre y Título */}
          <div className="initial-content">
            {step >= 1 && (
              <Terminal
                text="Cristofer Pizarro"
                typeSpeed={100}
                style={{
                  fontSize: "2.5rem",
                  color: "#ffffff",
                  fontFamily: "'Space Mono', monospace",
                }}
              />
            )}

            {step >= 2 && (
              <Terminal
                text="Ingeniero Civil Informático"
                typeSpeed={50}
                style={{
                  marginTop: "-50px",
                  fontSize: "1.2rem",
                  color: "#ffffff",
                  fontFamily: "'IBM3270', monospace",
                }}
              />
            )}
          </div>

          {/* Imagen de Perfil */}
          {step >= 3 && <div className="profile-picture"></div>}

          {/* Opciones de Navegación */}
          {step >= 3 && (
            <div className="navigation-options" style={{ paddingBottom: "3%" }}>
              <Terminal
                text="[Proyectos]"
                typeSpeed={50}
                style={{
                  fontSize: "1rem",
                  color: "#00ff00",
                  cursor: "pointer",
                  fontFamily: "'IBM3270', monospace",
                  marginBottom: "-20px",
                }}
                onClick={() => setSection("projects")}
              />
              <Terminal
                text="[Sobre mí]"
                typeSpeed={50}
                style={{
                  fontSize: "1rem",
                  color: "#00ff00",
                  cursor: "pointer",
                  fontFamily: "'IBM3270', monospace",
                  marginBottom: "-20px",
                }}
                onClick={() => setSection("about")}
              />
              <Terminal
                text="[Contacto]"
                typeSpeed={50}
                style={{
                  fontSize: "1rem",
                  color: "#00ff00",
                  cursor: "pointer",
                  fontFamily: "'IBM3270', monospace",
                }}
                onClick={() => setSection("contact")}
              />
            </div>
          )}
        </div>

        {/* Contenido dinámico */}
        <div className="right-column">
          {section === "projects" && (
            <p className="content">Estos son mis proyectos...</p>
          )}
          {section === "about" && <p className="content">Acerca de mí...</p>}
          {section === "contact" && (
            <p className="content">Ponte en contacto conmigo...</p>
          )}
        </div>
      </div>

      {/* Estilos */}
      <style>{`
        .app {
          position: relative;
          height: 100vh;
          background-color: #181818;
          color: #ffffff;
          font-family: 'Space Mono', monospace;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          height: 90vh;
          width: 90vw;
          border: 1.5px solid;
          display: flex;
          flex-direction: row;
        }

        .left-column {
          height: 100%;
          width: 35%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
        }

        .initial-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }

        .profile-picture {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-bottom: 70%;
          background: url('https://avatars.githubusercontent.com/u/102608682?v=4') center/cover;
          animation: pixelate 2s steps(20) forwards;
          filter: grayscale(100%);
        }

        .navigation-options {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .right-column {
          width: 65%;
          padding-left: 5rem;
          padding-top: 5rem;
        }

        .content {
          font-size: 1.5rem;
          color: #ffffff;
          font-family: 'IBM3270', monospace;
          text-align: justify;
          align-items: center;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }

          .left-column {
            width: 100%;
            padding: 10px;
            
          }

          .profile-picture {
            margin: 20px auto;
          }

          .navigation-options {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-direction: row;
          }

          .right-column {
            width: 100%;
            padding: 10px;
            margin-top: 20px;
          }
        }

        @keyframes pixelate {
          from {
            background-size: 10px 10px;
          }
          to {
            background-size: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
