import React, { useState, useEffect } from "react";
import Terminal from "./Terminal";

const App = () => {
  const [step, setStep] = useState(0); // Controla el flujo de renderizado
  const [section, setSection] = useState("home"); // Controla la sección activa

  const projects = [
    {
      title: "Sistema Web de Atención Ciudadana",
      description:
        "Sistema completo desarrollado desde la planificación hasta el despliegue. Usé React, Flask, PostgreSQL y OpenStreetMaps.",
      link: "https://github.com/cristoferapr/prototipo-atencion-ciudadana",
    },
    {
      title: "LocalMarket",
      description:
        "Aplicación para gestionar inventarios, ventas y base de datos para un minimarket. Usé React, Flask y SQL.",
      link: "https://github.com/cristoferapr/localmarket-webapp",
    },
  ];

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/cristoferapr",
      icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/cristoferapr/",
      icon: "https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png",
    },
    {
      name: "Correo",
      url: "mailto:cristoferpizarro.r@gmail.com",
      icon: "https://img.icons8.com/ios-glyphs/30/ffffff/new-post.png",
    },
  ];

  useEffect(() => {
    const timers = [];
    timers.push(
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 2200),
      setTimeout(() => setStep(3), 4200)
    );

    return () => timers.forEach(clearTimeout);
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
                  clear: "both",
                  marginTop: "-50px",
                  marginBottom: "-40px",
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
            <div className="navigation-options">
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
            <div className="content">
              <h2>Mis Proyectos</h2>
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver en GitHub
                  </a>
                </div>
              ))}
            </div>
          )}
          {section === "about" && (
            <div className="content" style={{ marginRight: "5px" }}>
              <h2>Sobre Mí</h2>
              <p>
                Apasionado por la ingeniería y la informática, siempre en
                búsqueda de aprender y explorar nuevas herramientas. Proactivo,
                con sólidas habilidades interpersonales y capacidad para
                colaborar eficazmente en equipo.
              </p>
            </div>
          )}
          {section === "contact" && (
            <div className="content">
              <h2>Contacto</h2>
              <div className="links">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={link.icon} alt={link.name} title={link.name} />
                  </a>
                ))}
              </div>
            </div>
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
          padding: 20px;
          display: flex;
        }

        .left-column {
          width: 35%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
        }

        .right-column {
          width: 65%;
          padding: 20px;
        }

        .profile-picture {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: url('https://avatars.githubusercontent.com/u/102608682?v=4') center/cover;
          animation: pixelate 2s steps(20) forwards;
          filter: grayscale(100%);
        }

        .navigation-options {
          display: flex;
          flex-direction: column;
        }

        .content h2 {
          color: #00ff00;
          margin-bottom: 10px;
        }

        .project-card {
          background-color: #282828;
          padding: 15px;
          margin-bottom: 10px;
          border-radius: 5px;
          transition: transform 0.2s;
        }

        .project-card:hover {
          transform: scale(1.05);
        }

        .links img {
          width: 30px;
          margin: 10px;
        }
          @media (max-width: 768px) {
          .container {
            flex-direction: column;
            margin: 0;
            padding: 0;
          }

          .left-column {
            width: 100%;
            height: 75vh;
            min-height:60%;
            max-height:75%;
            padding: 0;
            margin: 0;
            
          }

          .profile-picture {
            margin: 20px auto;
          }

          .navigation-options {
            display: flex;
            flex-direction: row;
            margin: 0;
            padding: 0;
          }

          .right-column {
            width: 100%;
            padding: 10px;
            overflow: scroll;
          }

          .project-card {
            width: 87%}
        }
            .content{
            margin-right: '50px'}
          


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
